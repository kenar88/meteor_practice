import React, { Component } from 'react';
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

  render () {
    return (
      <div>
        <p>{this.props.shortUrl}</p>
        <p>{this.props.url}</p>
        <button
          ref={(el) => this.copyButton = el}
          data-clipboard-text={this.props.shortUrl}>
          {this.state.justCopied ? 'Copied' : 'Copy'}
        </button>
      </div>
    );
  }
}

LinkListItem.propTypes = {
  shortUrl: PropTypes.string,
  url: PropTypes. string,
  _id: PropTypes.string.isRequired,
};

export default LinkListItem;