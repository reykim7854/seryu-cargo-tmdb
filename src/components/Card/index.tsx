import React from "react";
import "./index.css";
import { Prop } from "./types.ts";
import { Link } from "react-router-dom";

const Card: React.FC<Prop> = ({
  children,
  role = "listitem",
  width = "100%",
  backgroundColor = "var(--bg-secondary)",
  height = "auto",
  route = "",
}) => {
  return (
    <>
      <Link to={route} style={{ pointerEvents: !!route ? "initial" : "none" }}>
        <div
          className="card"
          role={role}
          style={{ width, backgroundColor, height }}
        >
          {children}
        </div>
      </Link>
    </>
  );
};

export default Card;
