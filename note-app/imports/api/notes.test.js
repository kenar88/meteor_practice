import { Meteor } from 'meteor/meteor';

import expect from 'expect';

import { Notes } from './notes';

if (Meteor.isServer) {
  describe('NOTES', function() {

    const noteTwo = {
      _id: 'testn123',
      title: 'new title',
      body: 'new body',
      updatedAt: 0,
      userId: 'asdId',
    };

    const noteOne = {
      _id: 'testid1',
      title: 'my title',
      body: 'adasdasdasd fadff',
      updatetAt: 1,
      userId: 'testUserId'
    };

    beforeEach(function () {
      Notes.remove({});
      Notes.insert(noteOne);
      Notes.insert(noteTwo);
    });

    it('should insert new note', function() {
    const _id = Meteor.server.method_handlers['notes.insert'].apply({ userId: noteOne.userId });
  
    expect(Notes.findOne({ _id, userId: noteOne.userId })).toBeTruthy();
    });

    it ('should not insert note if not auth', function() {
      expect(() => {
        Meteor.server.method_handlers['notes.insert']();
      }).toThrow();
    });

    it ('should remove note', function () {
      Meteor.server.method_handlers['notes.remove'].apply({ userId: noteOne.userId }, [noteOne._id]);
      expect(Notes.findOne({_id: 'testid1'})).toEqual(undefined);
    })

    it ('should returns users notes', function() {
      const res = Meteor.server.publish_handlers.notes.apply({ userId: noteTwo.userId });
      const notes = res.fetch();

      expect(notes.length).toBe(1);
      expect(notes[0]).toEqual(noteTwo);
    });

    it ('should not returns users notes if no id', function() {
      const res = Meteor.server.publish_handlers.notes.apply({ userId: 'sdfsdf' });
      const notes = res.fetch();

      expect(notes.length).toBe(0);
    });
  });
}