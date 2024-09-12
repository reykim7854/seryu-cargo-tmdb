import React, { useContext } from "react";
import type { Prop } from "../../types.ts";
import { IconContext } from "../../IconContext.ts";

const MenuIcon: React.FC = () => {
  const { size, fill, standalone } = useContext<Prop>(IconContext);

  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 -960 960 960"
        width={`${size}`}
        height={`${size}`}
        fill={fill}
        aria-hidden={!standalone}
      >
        {standalone && (
          <>
            <title id="title-menu-icon">Menu</title>
            <desc id="desc-menu-icon">Three line menu icon</desc>
          </>
        )}
        <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" />
      </svg>
    </>
  );
};

export default MenuIcon;
