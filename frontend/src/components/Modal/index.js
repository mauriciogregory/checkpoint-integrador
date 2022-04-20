import { useState } from "react";
import { Button } from "react-bootstrap";

export default function Modal() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div> 
      <h1>Modal</h1>
    </div>
  );
}