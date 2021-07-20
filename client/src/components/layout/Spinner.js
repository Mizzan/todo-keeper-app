import React from 'react';
import spinner from '../../spinner.gif';

const Spinner = () => {
  return (
    <>
      <img
        style={{ width: '200px', margin: 'auto', display: 'block' }}
        src={spinner}
        alt="loading spinner"
      />
    </>
  );
};

export default Spinner;
