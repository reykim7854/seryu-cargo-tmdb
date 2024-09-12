import React from "react";
import Shelf from "../../components/Shelf";
import MovieCard from "../../components/MovieCard";

const FavoritePage: React.FC = () => {
  return (
    <>
      <div className="main__content">
        <Shelf title="Your Favorite Movies">
          <MovieCard></MovieCard>
        </Shelf>
      </div>
    </>
  );
};

export default FavoritePage;
