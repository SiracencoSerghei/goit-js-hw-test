import React from 'react';

export default function Button({ children, onSmash }) {
  return (
    <button className='btn btn-primary' onClick={onSmash} >
      {children}
    </button>
  );
}