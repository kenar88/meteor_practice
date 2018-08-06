import React from 'react';

import { Accounts } from 'meteor/accounts-base';

const PrivateHeader = (props) => {
  const onLogout = () => {
    Accounts.logout();
  }
  return (
    <div className="boxed-view__header"> 
      <h1>{props.header}</h1>
      <a className="btn--header" onClick={onLogout}>Logout</a>
    </div>    

  );
}

export default PrivateHeader;