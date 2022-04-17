import React from "react";
import ReactDOM from "react-dom";

import Card from "./Card";
import Button from "./Button";

import "./ErrorModal.css";

function Backdrop(props) {
  return <div className="backdrop" onClick={props.onClose} />;
}

function Modal(props) {
  return (
    <Card className="modal">
      <header className="header">
        <h2>{props.title}</h2>
      </header>
      <div className="content">
        <p>{props.message}</p>
      </div>
      <footer className="actions">
        <Button onClick={props.onClose}>Close</Button>
      </footer>
    </Card>
  );
}

function ErrorModal(props) {
  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop onClose={props.onClose} />,
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(
        <Modal
          title={props.title}
          message={props.message}
          onClose={props.onClose}
        />,
        document.getElementById("overlay-root")
      )}
    </>
  );
}

export default ErrorModal;
