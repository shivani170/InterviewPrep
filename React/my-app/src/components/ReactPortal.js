import { useState } from "react";
import Modal from "./Modal";

const ReactPortal = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <div>
      <h1>Welcome in React Portal</h1>
      <button onClick={() => setShowModal(!showModal)}>Toggle Modal</button>
      <Modal isOpen={showModal}>
        <h2>This is Portal</h2>
        <p>This modal is rendered outside the parent component</p>
      </Modal>
    </div>
  );
};

export default ReactPortal;
