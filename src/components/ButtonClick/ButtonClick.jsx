import React from 'react';
import {Button} from './button';


export function ButtonClick() {
  const handleClick = () => alert('Button clicked!');
    return <Button className="my-button-class" text="Click me" onClick={handleClick} />;
}



