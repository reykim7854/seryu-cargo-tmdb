import React from "react";
import type { Prop } from "./types.ts";
import "./index.css";

const Shelf: React.FC<Prop> = ({
  children,
  title,
  titleFontSize = "3rem",
  noWrap = false,
}) => {
  return (
    <>
      <section className="shelf">
        <h2
          className="shelf__title font-poppins--semibold"
          style={{ fontSize: titleFontSize }}
        >
          {title}
        </h2>
        <div
          role="listbox"
          className={`list shelf__list ${noWrap && "shelf__list--nowrap"}`}
        >
          {children}
        </div>
      </section>
    </>
  );
};

export default Shelf;
