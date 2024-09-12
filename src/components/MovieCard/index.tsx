import React from "react";
import Card from "../Card";
import "./index.css";
import { Prop } from "./types";
import { apiImageUrl } from "../../lib/api";

const MovieCard: React.FC<Prop> = ({ title, year, posterPath, route = "" }) => {
  return (
    <>
      <Card width="193px" route={route}>
        <div className="movie-card">
          <img
            className="movie-card__image"
            src={`${apiImageUrl}/w200${posterPath}`}
            alt={`${title} poster`}
            loading="lazy"
          />
          <div className="caption movie-card__caption">
            <p className="caption__title font-inter--bold">{title}</p>
            <p className="caption__subtitle font-inter--regular">{year}</p>
          </div>
        </div>
      </Card>
    </>
  );
};

export default MovieCard;
