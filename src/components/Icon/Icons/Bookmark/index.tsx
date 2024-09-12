import React, { useContext } from "react";
import type { Prop } from "../../types.ts";
import { IconContext } from "../../IconContext.ts";

const BookmarkIcon: React.FC = () => {
  const { size, fill, standalone } = useContext<Prop>(IconContext);

  return (
    <>
      <svg
        width={`${size}`}
        height={`${size}`}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden={!standalone}
      >
        {standalone && (
          <>
            <title id="title-bookmark-icon">Add to Watchlist</title>
            <desc id="desc-bookmark-icon">
              Add to watchlist icon in the shape of a bookmark
            </desc>
          </>
        )}
        <use clipPath="url(#clip0_814_155)" />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M4 5C4 4.20435 4.31607 3.44129 4.87868 2.87868C5.44129 2.31607 6.20435 2 7 2H17C17.7956 2 18.5587 2.31607 19.1213 2.87868C19.6839 3.44129 20 4.20435 20 5V21.028C20 22.248 18.62 22.958 17.628 22.249L12 18.229L6.372 22.249C5.379 22.959 4 22.249 4 21.029V5ZM7 4C6.73478 4 6.48043 4.10536 6.29289 4.29289C6.10536 4.48043 6 4.73478 6 5V20.057L11.128 16.394C11.3824 16.2122 11.6873 16.1145 12 16.1145C12.3127 16.1145 12.6176 16.2122 12.872 16.394L18 20.057V5C18 4.73478 17.8946 4.48043 17.7071 4.29289C17.5196 4.10536 17.2652 4 17 4H7Z"
          fill={fill}
        />
        <defs>
          <clipPath id="clip0_814_155">
            <rect width={`${size}`} height={`${size}`} fill={fill} />
          </clipPath>
        </defs>
      </svg>
    </>
  );
};

export default BookmarkIcon;
