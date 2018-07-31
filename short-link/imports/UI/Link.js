import React from 'react';

import LinksList from './LinksList';
import PrivateHeader from './PrivateHeader';
import AddLink from './AddLink';

const Link = () => {
  return (
    <div>
    <PrivateHeader header='Your Links!' />
    <LinksList />
    <AddLink />
  </div>
  );
}


export default Link;