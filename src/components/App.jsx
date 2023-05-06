
import React from "react";
import {Toolbar} from './AlertBtn/AlertBtn';
import '../index.css';

export default function App() {
   
  const handlePlayMovie = () => {
    alert('Playing!');
  };

  const handleUploadImage = () => {
    alert('Uploading!');
  };

  return (
    <div className='app'>
      <h1>Hello React!</h1>

      <Toolbar onPlayMovie={handlePlayMovie} onUploadImage={handleUploadImage} />
    </div>
  );
}

   