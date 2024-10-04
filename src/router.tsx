import { createHashRouter } from "react-router-dom";
import Root from "./routes/Root";
import ErrorPage from "./routes/ErrorPage";
import HomePage, { loader as homeLoader } from "./routes/HomePage";
import MoviePage, { loader as movieLoader } from "./routes/MoviePage";
import WatchlistPage from "./routes/WatchlistPage";
import FavoritePage from "./routes/FavoritePage";

const router = createHashRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        errorElement: <ErrorPage />,
        children: [
          { index: true, element: <HomePage />, loader: homeLoader },
          {
            path: "movie/:movieId",
            element: <MoviePage />,
            loader: movieLoader,
          },
          { path: "watchlist", element: <WatchlistPage /> },
          { path: "favorite", element: <FavoritePage /> },
        ],
      },
    ],
  },
]);

export { router };
