import React from "react";
import Shelf from "../../components/Shelf";

const WatchlistPage: React.FC = () => {
  return (
    <>
      <div className="main__content">
        <Shelf title="Your Watchlist">
          <div></div>
        </Shelf>
      </div>
    </>
  );
};

export default WatchlistPage;
