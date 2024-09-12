import React from "react";
import {
  CircularProgressbarWithChildren,
  buildStyles,
} from "react-circular-progressbar";
import type { Prop } from "./types.ts";

const CircularProgressBar: React.FC<Prop> = ({
  width = "30px",
  height = "30px",
  value,
  backgroundColor = "#ffffff",
  backgroundPadding = 8,
  strokeLinecap = "butt",
  trailColor = "#ededed",
  pathColor = "#0ea5e9",
  textColor = "#0ea5e9",
  fontSize = "0.625rem",
  className = "",
}) => {
  return (
    <>
      <div
        className={`${className}`}
        style={{ width, height }}
        role="progressbar"
      >
        <CircularProgressbarWithChildren
          value={value}
          background={true}
          backgroundPadding={backgroundPadding}
          styles={buildStyles({
            backgroundColor,
            strokeLinecap,
            trailColor,
            pathColor,
          })}
        >
          <span
            className="font-roboto--black"
            style={{ color: textColor, fontSize }}
          >
            {value}
          </span>
        </CircularProgressbarWithChildren>
      </div>
    </>
  );
};

export default CircularProgressBar;
