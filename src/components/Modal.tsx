import React from "react";
import ReactDom from "react-dom";

interface ModalProps {
  open: boolean;
  children: React.ReactNode;
  onClose: () => void;
}

export const Modal: React.FC<ModalProps> = ({ open, children, onClose }) => {
  if (!open) return null;

  return ReactDom.createPortal(
    <>
      <div className="overlay" />
      <div className="modal">{children}</div>
    </>,
    document.getElementById("portal")!
  );
};
