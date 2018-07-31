import React from 'react';

import { Accounts } from 'meteor/accounts-base';

const PrivateHeader = (props) => {
  const onLogout = () => {
    Accounts.logout();
  }

  return (
    <div>
      <p>{props.header}</p>
      <button onClick={onLogout}>Log out</button>
    </div>
  );
}

export default PrivateHeader;