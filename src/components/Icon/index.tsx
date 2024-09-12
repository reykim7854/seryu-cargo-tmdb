import React from "react";
import type { IconType, Prop } from "./types.ts";

import BookmarkIcon from "./Icons/Bookmark";
import FavoriteIcon from "./Icons/FavoriteIcon";
import LogoutIcon from "./Icons/LogoutIcon";
import { IconContext } from "./IconContext.ts";
import MenuIcon from "./Icons/MenuIcon/index.tsx";

const Icon: React.FC<IconType & Prop> = ({
  icon,
  size = 30,
  fill = "#ffffff",
  standalone = true,
}) => {
  return (
    <>
      <IconContext.Provider value={{ size, fill, standalone }}>
        {icon === "bookmark" ? (
          <BookmarkIcon></BookmarkIcon>
        ) : icon === "favorite" ? (
          <FavoriteIcon></FavoriteIcon>
        ) : icon === "logout" ? (
          <LogoutIcon></LogoutIcon>
        ) : icon === "menu" ? (
          <MenuIcon></MenuIcon>
        ) : null}
      </IconContext.Provider>
    </>
  );
};

export default Icon;
