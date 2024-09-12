import React, { useRef, useEffect } from "react";
import "./index.css";
import type { Prop } from "./types.tsx";

const Dialog: React.FC<Prop> = ({
  openModal,
  closeModal,
  children,
  label = "dialog",
}) => {
  const ref = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    if (openModal) {
      ref.current?.showModal();
    } else {
      ref.current?.close();
    }
  }, [openModal]);

  return (
    <>
      <dialog aria-labelledby={label} ref={ref} onCancel={closeModal}>
        {children}
        <button onClick={closeModal}>Close</button>
      </dialog>
    </>
  );
};

export default Dialog;
