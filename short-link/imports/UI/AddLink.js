import React from 'react';

import { Meteor } from 'meteor/meteor';

const AddLink = () => {
  const onSubmit = (e) => {
    const url = this.urlInput.value.trim();
    e.preventDefault();

    if(url) {
      Meteor.call('links.insert', url);
      this.urlInput.value = '';
    }
  }

  return (
    <div>
      <p>Add Link</p>
        <form onSubmit={onSubmit}>
          <input type='text' placeholder='URL' ref={(el) => this.urlInput = el} />
          <button>Add Link</button>
        </form>
    </div>
  );
}

export default AddLink;