import { apiFetch } from "../..";
import type { Param } from "../../types";

const options: Param = {
  method: "get",
  url: "",
};

const getMovieTopRated = async () => {
  options.url = "/3/movie/top_rated";
  const response = await apiFetch(options);

  return response;
};

const getMovieNowPlaying = async () => {
  options.url = "/3/movie/now_playing";
  const response = await apiFetch(options);

  return response;
};

const getMovieRecommendations = async (movieId: number) => {
  options.url = `/3/movie/${movieId}/recommendations`;
  const response = await apiFetch(options);

  return response;
};

const getMovieDetails = async (movieId: number) => {
  options.url = `/3/movie/${movieId}`;
  const response = await apiFetch(options);

  return response;
};

export {
  getMovieTopRated,
  getMovieNowPlaying,
  getMovieRecommendations,
  getMovieDetails,
};
