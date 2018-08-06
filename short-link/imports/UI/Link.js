import React from 'react';

import LinksList from './LinksList';
import PrivateHeader from './PrivateHeader';
import AddLink from './AddLink';
import LinksFilters from './LinksFilters';

const Link = () => {
  return (
    <div>
    <PrivateHeader header='Short lnk' />
    <div className="page-content">
      <LinksFilters />
      <AddLink />
      <LinksList /> 
    </div>   
  </div>
  );
}


export default Link;