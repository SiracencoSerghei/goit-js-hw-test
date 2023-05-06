import React from "react";
import Button from "components/Button/Button";

function AlertButton({ message, onClick}) {
    return (
      <Button message={message} onClick={onClick} />
    );
  }
  export default AlertButton;