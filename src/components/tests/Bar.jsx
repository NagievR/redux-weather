import React from 'react';

const Bar = (props) => {
  return (
    <div className='test'>
      IM BAR
      <br />
      {JSON.stringify(props, null, 2)}
    </div>
  );
}

export default Bar;
