
import React from "react";
import AlertBtn from './AlertBtn/AlertBtn';
import '../index.css';

export default function App() {
  const messages = [
    'Click on Me!!!',
    'Play Movie',
    'Upload Image',
];
let message;
  const onBtnClick = () => {
    alert('message');
  };
  
  return (
    <div  className='app' >
      <h1>Hello React!</h1>
      <AlertBtn onClick={onBtnClick} message={messages[0]} />
      <AlertBtn onClick={onBtnClick} message={messages[1]} />
      <AlertBtn onClick={onBtnClick} message={messages[2]} />
    </ div>
  );
}

   