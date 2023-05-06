import React from 'react';

export default function Button({ children, onClick }) {
  return (
    <button className='btn btn-primary' onClick={e => {
      e.stopPropagation();
      onClick();}} >
      {children}
    </button>
  );
}