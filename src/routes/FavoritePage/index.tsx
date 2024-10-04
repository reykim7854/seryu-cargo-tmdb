import React from "react";
import Shelf from "../../components/Shelf";
const FavoritePage: React.FC = () => {
  return (
    <>
      <div className="main__content">
        <Shelf title="Your Favorite Movies">
          <div></div>
        </Shelf>
      </div>
    </>
  );
};

export default FavoritePage;
