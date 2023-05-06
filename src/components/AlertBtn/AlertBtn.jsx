import React from "react";
import Button from "components/Button/Button";

function PlayButton({ movieName }) {
    function handlePlayClick() {
      alert(`Playing ${movieName}!`);
    }
  
    return (
      <Button onClick={handlePlayClick}>
        Play "{movieName}"
      </Button>
    );
  }
  function UploadButton() {
    return (
      <Button onClick={() => alert('Uploading!')} children={'Upload Image'}>
      </Button>
    );
  }
  export function ToolBar() {
    return (
      <div>
        <PlayButton movieName="Kiki's Delivery Service" />
        <UploadButton />
      </div>
    );
  }
  export function Toolbar({ onPlayMovie, onUploadImage }) {
    return (
      <div>
        <Button onClick={onPlayMovie}>
          Play Movie
        </Button>
        <Button onClick={onUploadImage}>
          Upload Image
        </Button>
      </div>
    );
  }