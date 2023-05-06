
import React from "react";
import Button from "components/Button/Button";
import {ToolBar, Toolbar} from './AlertBtn/AlertBtn';
import '../index.css';

export default function App() {
  const messages = [
    'Click on Me!!!',
    'Play Movie',
    'Upload Image',
];
const onHandleClick = () => {
  alert('You clicked Me !!!');
}
  
  return (
    <div  className='app' >
      <h1>Hello React!</h1>
      <Button onClick={onHandleClick} children={messages[0]}/>
      <ToolBar />
      <Toolbar
      onPlayMovie={() => alert('Playing!')}
      onUploadImage={() => alert('Uploading!')}
    />
      </ div>
  );
}

   