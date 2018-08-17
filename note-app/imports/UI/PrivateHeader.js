import React from 'react';

const PrivateHeader = (props) => {

  return (
    <div className="boxed-view__header"> 
      <h1>{props.header}</h1>
      <a className="btn--header" onClick={props.onLogout}>Logout</a>
    </div>    

  );
}

export default PrivateHeader;