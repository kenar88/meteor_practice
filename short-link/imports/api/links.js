import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';

import SimpleSchema from 'simpl-schema';

export const Links = new Mongo.Collection('links');

if (Meteor.isServer) {
  Meteor.publish('links', function () {    
    return Links.find({ userId: this.userId });
  });
}

Meteor.methods({
  'links.insert'(url) {
    if(!this.userId) {
      throw new Meteor.Error('not-authorized');
    }

    try {
      new SimpleSchema({
        url: {
          type: String,
          regEx: SimpleSchema.RegEx.Url, 
        }
      }).validate({ url });
    } catch (e) {
      throw new Meteor.Error(400, e.message);
    }

    Links.insert({
      url,
      userId: this.userId,
      visible: true,
      visitedCount: 0,
      lastVisitedAt: null,
    });
  },

  'links.setVisibility' (_id, visible) {
    if (!this.userId) {
      throw new Meteor.Error('not-authorized');
    }

    try {
      new SimpleSchema({
        _id: {
          type: String,
          min: 1,
        },
        visible: {
          type: Boolean,
        },
      }).validate({ _id, visible });
    } catch (e) {
      throw new Meteor.Error(400, e.message);
    }
    
      Links.update({
        _id,
        userId: this.userId,
      },
       {$set: {visible: visible}},
      );
  },
  'links.trackVisit' (_id) {
    try {
      new SimpleSchema({
        _id: {
          type: String,
          min: 1,
        },
      }).validate({ _id });
    } catch (e) {
      throw new Meteor.Error(400, e.message);
    }

    Links.update({_id}, {
       $inc: {
          visitedCount: 1,
        },
        $set: {
          lastVisitedAt: new Date().getTime(),
        },
      });
  }
});