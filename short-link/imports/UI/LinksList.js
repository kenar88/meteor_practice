import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';

import { Tracker } from 'meteor/tracker';
import { Session } from 'meteor/session';
import { Links } from '../api/links';

import LinkListItem from './LinkListItem';

class LinksList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      links: [],
    }
  }

  componentDidMount() {
    this.TrackerList = Tracker.autorun(() => {
      Meteor.subscribe('links');
      const links = Links.find({
        visible: Session.get('showVisible'),
      }).fetch();      
      this.setState({links});
    });
  }

  componentWillUnmount() {
    this.TrackerList.stop();
  }

  renderListHandler = () => {
    return this.state.links.map(item => {
      const shortUrl = Meteor.absoluteUrl(item._id);
      return <LinkListItem key={item._id} shortUrl={shortUrl} {...item} />
    });
  }

  render() {
    return (
      <div>
        <p>Links list</p>
        {this.renderListHandler()}
      </div>
    );
  }
}

export default LinksList;