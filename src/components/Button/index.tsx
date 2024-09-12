import React from "react";
import type { Prop } from "./types.ts";
import "./index.css";

const Button: React.FC<Prop> = ({
  children,
  backgroundColor = "initial",
  className = "",
  onClick,
}) => {
  return (
    <>
      <button
        className={`button ${className}`}
        style={{ backgroundColor }}
        onClick={onClick}
      >
        {children}
      </button>
    </>
  );
};

export default Button;
