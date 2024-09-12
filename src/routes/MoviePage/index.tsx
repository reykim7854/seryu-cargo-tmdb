import React from "react";
import Banner from "../../components/Banner";
import MovieDetails from "../../components/MovieDetails";
import Shelf from "../../components/Shelf";
import MovieCard from "../../components/MovieCard";
import {
  getMovieDetails,
  getMovieRecommendations,
} from "../../lib/api/routes/movie/get";
import { useLoaderData } from "react-router-dom";

export const loader = async ({ params }: any) => {
  try {
    const [movieDetails, movieRecommedations] = await Promise.all([
      getMovieDetails(params.movieId),
      getMovieRecommendations(params.movieId),
    ]).then((data) => {
      return Promise.all(data.map(async (e) => await e.json()));
    });

    return {
      movieDetails,
      movieRecommedations,
    };
  } catch (error) {
    console.error(error);
  }
};

const MoviePage: React.FC = () => {
  const { movieDetails, movieRecommedations } = useLoaderData() as any;

  return (
    <>
      <Banner
        backdropPath={movieDetails.backdrop_path}
        title={movieDetails.title}
      >
        <MovieDetails
          posterPath={movieDetails.poster_path}
          title={movieDetails.title}
          releaseDate={movieDetails.release_date}
          genres={movieDetails.genres}
          voteAverage={movieDetails.vote_average}
          tagline={movieDetails.tagline}
          overview={movieDetails.overview}
          runtime={movieDetails.runtime}
        ></MovieDetails>
      </Banner>
      <div className="main__content">
        <Shelf title="Recommendations" titleFontSize="1.25rem">
          {movieRecommedations.results.map((movie: any, i: number) => {
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

export default MoviePage;
