import React from 'react';

const New = (props) => {
  return (
    <div className='test'>
      IM NEW
      <br />
      {JSON.stringify(props, null, 10)}
    </div>
  );
}

export default New;
