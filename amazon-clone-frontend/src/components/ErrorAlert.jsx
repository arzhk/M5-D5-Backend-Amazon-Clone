import React from "react";
import { Alert } from "react-bootstrap";

function ErrorAlert(props) {
  console.log(props.error);
  return (
    <Alert className="error-message mt-2" variant="danger">
      <span className="font-weight-bold">Error: </span>
      {props.error.msg}
    </Alert>
  );
}

export default ErrorAlert;
