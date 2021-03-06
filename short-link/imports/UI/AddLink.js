import React, { Component } from 'react';

import { Meteor } from 'meteor/meteor';
import Modal from 'react-modal';


class AddLink extends Component {
  constructor(props) {
    super(props);

    this.state = {
      url: '',
      modalIsOpen: false,
      error: '',      
    }

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.onModalClose = this.onModalClose.bind(this);
  }

  componentWillMount () {
    Modal.setAppElement(document.getElementById('app'));
  }

  onSubmit (e) {
    const { url } = this.state;

    e.preventDefault();

    Meteor.call('links.insert', url, (err, res) => {
      if (!err) {
        this.onModalClose();
      } else {
        this.setState({error: err.reason});
      }
    })  
  }

  onChange (e) {
    this.setState({
      url: e.target.value,
    });
  }

  onModalClose () {
    this.setState({ url: '', modalIsOpen: false, error: '' });
  }

  render () {
    return (
      <div>
        <button className="btn" onClick={() => this.setState({modalIsOpen: true})}>>+ Add Link</button>
        <Modal
          contentLabel="Example Modal"
          isOpen={this.state.modalIsOpen}
          onAfterOpen={() => this.urlInput.focus()}
          onRequestClose={this.onModalClose}
          className="boxed-view__box"
          overlayClassName="boxed-view boxed-view__modal"
          >
          <h1>Add Link</h1>
          {!this.state.error ? null : <p>{this.state.error}</p>}
            <form className="boxed-view__form" onSubmit={this.onSubmit}>
              <input
                type='text'
                placeholder='URL'
                onChange={this.onChange}
                value={this.state.url}
                ref ={(el) => this.urlInput = el}
              />
              <button className="btn">Add Link</button>
              <button type="button" className="btn btn--secondary" onClick={this.onModalClose}>Cancel</button>
            </form>            
        </Modal>
      </div>
    );
  }
}

export default AddLink;