import React from 'react';

import PrivateHeader from './PrivateHeader';
import { Accounts } from 'meteor/accounts-base';

const Link = () => {
  const onLogout = () => {
    Accounts.logout();
  }

  return (
    <div>
    <PrivateHeader header='Dashboard' onLogout={onLogout} />
    <div className="page-content">
      dashboard content
    </div>   
  </div>
  );
}


export default Link;