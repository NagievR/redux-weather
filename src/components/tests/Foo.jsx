import React from 'react';

const Foo = (props) => {
  return (
    <div className='test'>
      IM FOO
      {JSON.stringify(props, null, 2)}
    </div>
  );
}

export default Foo;
