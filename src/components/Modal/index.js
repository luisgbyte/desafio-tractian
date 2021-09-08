import React from "react";

import ReactModal from "react-modal";

function Modal({ children, isOpen, setIsOpen }) {
  
  return (
    <>
      <ReactModal
        shouldCloseOnOverlayClick={!false}
        onRequestClose={() => setIsOpen(!isOpen)}
        isOpen={isOpen}
        ariaHideApp={false}
        style={{
          content: {
            top: "40%",
            left: "50%",
            right: "auto",
            bottom: "auto",
            marginRight: "-50%",
            transform: "translate(-50%, -50%)",
            background: "#F0F0F5",
            color: "#000000",
            borderRadius: "0.8rem",
            width: "25vw",
            border: "none",
          },
          overlay: {
            backgroundColor: "#121214e6",
          },
        }}
      >
        {children}
      </ReactModal>
    </>
  );
}

export default Modal;
