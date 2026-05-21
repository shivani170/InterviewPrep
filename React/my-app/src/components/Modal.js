import ReactDOM from "react-dom";

const Modal = ({ isOpen, children }) => {
  if (!isOpen) return null;
  return ReactDOM.createPortal(children, document.getElementById("modal-root"));
};

export default Modal;
