import React from "react";
import Button from "components/Button/Button";


export function Toolbar({ onPlayMovie, onUploadImage }) {
    const handleToolbarClick = () => {
      alert('You clicked on the toolbar!');
    };
  
    return (
      <div className="Toolbar" onClick={handleToolbarClick}>
        <Button onClick={onPlayMovie}>Play Movie</Button>
        <Button onClick={onUploadImage}>Upload Image</Button>
      </div>
    );
}