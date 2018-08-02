import React from 'react';

import { Session } from 'meteor/session';

const LinksFilters = () => {
  return (
    <div>
      <label>
        <input type='checkbox' onChange={(e) => {
          Session.set('showVisible', !e.target.checked);
        }}/>
        show hidden links
      </label>
    </div>
  );
}

export default LinksFilters