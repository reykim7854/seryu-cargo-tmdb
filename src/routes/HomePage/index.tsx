import React from "react";
import Shelf from "../../components/Shelf";
import MovieCard from "../../components/MovieCard";
import {
  getMovieNowPlaying,
  getMovieTopRated,
} from "../../lib/api/routes/movie/get";
import { useLoaderData } from "react-router-dom";

export const loader = async () => {
  try {
    const [movieNowPlaying, movieTopRated] = await Promise.all([
      getMovieNowPlaying(),
      getMovieTopRated(),
    ]).then((data) => {
      return Promise.all(data.map(async (e) => await e.json()));
    });

    return {
      movieNowPlaying,
      movieTopRated,
    };
  } catch (error) {
    console.error(error);
  }
};

const HomePage: React.FC = () => {
  const { movieTopRated, movieNowPlaying } = useLoaderData() as any;

  return (
    <>
      <div className="main__content">
        <Shelf title="Now Playing" noWrap>
          {movieNowPlaying.results.map((movie: any, i: number) => {
            return (
              <MovieCard
                key={`top-rated-${i}`}
                title={movie.title}
                year={new Date(movie.release_date).getFullYear()}
                posterPath={movie.poster_path}
                route={`/movie/${movie.id}`}
              ></MovieCard>
            );
          })}
        </Shelf>
        <Shelf title="Top Rated">
          {movieTopRated.results.map((movie: any, i: number) => {
            return (
              <MovieCard
                key={`top-rated-${i}`}
                title={movie.title}
                year={new Date(movie.release_date).getFullYear()}
                posterPath={movie.poster_path}
                route={`/movie/${movie.id}`}
              ></MovieCard>
            );
          })}
        </Shelf>
      </div>
    </>
  );
};

export default HomePage;
