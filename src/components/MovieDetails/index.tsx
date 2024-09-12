import React from "react";
import CircularProgressBar from "../CircularProgressBar";
import Icon from "../Icon";
import Button from "../Button";
import "react-circular-progressbar/dist/styles.css";
import "./index.css";
import { Prop } from "./types";
import { apiImageUrl } from "../../lib/api";
import { NumberToTime } from "../../lib/helper/NumberToTime";

const MovieDetails: React.FC<Prop> = ({
  posterPath,
  title,
  releaseDate,
  genres = [],
  voteAverage,
  tagline,
  overview,
  runtime,
}) => {
  const releaseDateValue = new Date(releaseDate);
  const genresValue =
    genres.length > 0 ? genres.map((genre) => genre.name) : [];
  const userScore = (Math.round(voteAverage * 10) / 10) * 10;
  const runtimeValue = runtime ? NumberToTime(runtime) : "-";

  return (
    <>
      <article className="synopsis">
        <div className="synopsis__poster">
          <img
            className="poster__image"
            src={`${apiImageUrl}/w200${posterPath}`}
            alt={`${title} poster`}
          />
        </div>
        <div className="detail synopsis__detail">
          <h2 className="title detail__title font-poppins--bold">
            {title}{" "}
            <span className="title_year font-poppins--regular">
              ({releaseDateValue.getFullYear()})
            </span>
          </h2>
          <ul className="metadata detail__metadata">
            <li className="item metadata__item">
              {releaseDateValue.toLocaleDateString()}
            </li>
            <li className="item metadata__item">
              <span aria-hidden="true" className="item__bullet">
                {" "}
                &bull;{" "}
              </span>
              {!!genresValue && genresValue.join(", ")}
            </li>
            <li className="metadata__item">
              <span aria-hidden="true" className="item__bullet">
                {" "}
                &bull;{" "}
              </span>
              {runtimeValue}
            </li>
          </ul>
          <div className="action detail__action">
            <div className="user-score action__item">
              <CircularProgressBar
                className="user-score__score"
                value={userScore}
                width="40px"
                height="40px"
                fontSize="0.75rem"
              ></CircularProgressBar>
              <p className="user-score__text">User Score</p>
            </div>
            <Button className="action__item" backgroundColor="transparent">
              <Icon icon="bookmark" size={25}></Icon>
            </Button>
            <Button className="action__item" backgroundColor="transparent">
              <Icon icon="favorite" size={25}></Icon>
            </Button>
          </div>
          <p className="detail__tagline">{tagline}</p>
          <div className="overview detail__overview">
            <h3 className="overview__header font-roboto--bold">Overview</h3>
            <p className="overview__text">{overview ? overview : "-"}</p>
          </div>
        </div>
      </article>
    </>
  );
};

export default MovieDetails;
