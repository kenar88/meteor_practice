import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';

import moment from 'moment';

import PropTypes from 'prop-types';
import Clipboard from 'clipboard';

class LinkListItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      justCopied: false,
    };
  }

  componentDidMount () {
    this.clipboard = new Clipboard(this.copyButton);
    this.clipboard.on('success', () => {
      this.setState({ justCopied: true });

      setTimeout(() => {
        this.setState({ justCopied: false });
      }, 1000);

    }).on('error', () => {
      alert('Something goes wrong. Please manually copy the link');
    });
  }

  componentWillUnmount () {
    this.clipboard.destroy();
  }

  renderStats () {
    const visit = this.props.visitedCount === 1 ? 'visit' : 'visits';

    let visitTime = null;

    if (typeof this.props.lastVisitedAt === 'number') {
      visitTime = `(visited ${moment(this.props.lastVisitedAt).fromNow()})`;
    }

    return <p className="item-message">{this.props.visitedCount} {visit} - {visitTime}</p>
  }

  render () {
    return (
      <div className="item">
        <h2>{this.props.shortUrl}</h2>
        <p className="item-message">{this.props.url}</p>
        {this.renderStats()}
        <a className="btn btn--link btn--pill" href={this.props.shortUrl} target="_blank">Visit</a>
        <button
          className="btn btn--pill"
          ref={(el) => this.copyButton = el}
          data-clipboard-text={this.props.shortUrl}>
          {this.state.justCopied ? 'Copied' : 'Copy'}
        </button>
        <button
          className="btn btn--pill"
          onClick={() => Meteor.call('links.setVisibility', this.props._id, !this.props.visible)}>
          {this.props.visible ? 'Hide' : 'Show'}
        </button>
      </div>
    );
  }
}

LinkListItem.propTypes = {
  shortUrl: PropTypes.string,
  url: PropTypes. string,
  _id: PropTypes.string.isRequired,
  visible: PropTypes.bool,
  lastVisitedAt: PropTypes.number,
  visitedCount: PropTypes.number.isRequired,
};

export default LinkListItem;