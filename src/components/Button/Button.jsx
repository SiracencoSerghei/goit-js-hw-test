import React from 'react';

export default function Button({ message, onClick }) {
  return (
    <button className='btn btn-primary' onClick={onClick} >
      {message}
    </button>
  );
}