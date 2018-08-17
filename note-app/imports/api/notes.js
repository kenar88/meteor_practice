import { Mongo } from 'meteor/mongo';
import { Meteor } from 'meteor/meteor';

import SimpleSchema from 'simpl-schema';

import moment from 'moment';

export const Notes = new Mongo.Collection('notes');

if (Meteor.isServer) {
  Meteor.publish('notes', function () {
    return Notes.find({userId: this.userId});
  });
}

Meteor.methods({
  'notes.insert'() {
    if(!this.userId) {
      throw new Meteor.Error('not authorised');
    }

    return Notes.insert({
      title: '',
      body: '',
      userId: this.userId,
      updatetAt: moment.valueOf(),
    })
  },

  'notes.remove'(_id) {
    if(!this.userId) {
      throw new Meteor.Error('not authorised');
    }

    try {
      new SimpleSchema({
        _id: {
          type: String,
          min: 1,
        }
      }).validate({ _id });
    } catch (e) {
      throw new Meteor.Error(400, e.message);
    }

    Notes.remove({_id});
  },

  'notes.update'(_id, updates) {
    if(!this.userId) {
      throw new Meteor.Error('not authorised');
    }

    try {
      new SimpleSchema({
        _id: {
          type: String,
          min: 1,
        },
        title: {
          type: String,
          optional: true,
        },
        body: {
          type: String,
          optional: true,
        },
      }).validate({ _id, ...updates });
    } catch (e) {
      throw new Meteor.Error(400, e.message);
    }

    Notes.update(_id, {
      $set: {
        updatetAt: moment.valueOf(),
        ...updates,
      },
    });
  }
})