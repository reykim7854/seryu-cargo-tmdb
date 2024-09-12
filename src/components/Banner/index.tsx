import React from "react";
import { apiImageUrl } from "../../lib/api/index.ts";
import "./index.css";
import { Prop } from "./types.ts";

const Banner: React.FC<Prop> = ({ children, backdropPath, title }) => {
  return (
    <>
      <section className="banner">
        <img
          className="banner__image"
          src={!!backdropPath ? `${apiImageUrl}/original${backdropPath}` : ""}
          alt={!!title ? `${title} banner poster` : ""}
        />
        <div className="banner__content">{children ? children : ""}</div>
      </section>
    </>
  );
};

export default Banner;
