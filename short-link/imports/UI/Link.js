import React from 'react';

import LinksList from './LinksList';
import PrivateHeader from './PrivateHeader';
import AddLink from './AddLink';
import LinksFilters from './LinksFilters';

const Link = () => {
  return (
    <div>
    <PrivateHeader header='Your Links!' />
    <LinksFilters />
    <AddLink />
    <LinksList />    
  </div>
  );
}


export default Link;