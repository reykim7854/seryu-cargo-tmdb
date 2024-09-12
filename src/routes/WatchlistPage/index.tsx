import React from "react";
import Shelf from "../../components/Shelf";
import MovieCard from "../../components/MovieCard";

const WatchlistPage: React.FC = () => {
  return (
    <>
      <div className="main__content">
        <Shelf title="Your Watchlist">
          <MovieCard></MovieCard>
        </Shelf>
      </div>
    </>
  );
};

export default WatchlistPage;
