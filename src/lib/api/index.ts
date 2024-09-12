import type { Param } from "./types.ts";

const apiBaseUrl = "https://api.themoviedb.org";
const apiImageUrl = "https://image.tmdb.org/t/p";

const apiFetch = async ({ method, url, body, headers }: Param) => {
  return await fetch(`${apiBaseUrl}${url}`, {
    method,
    body,
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${import.meta.env.VITE_ACCESS_TOKEN}`,
      ...headers,
    },
  });
};

export { apiFetch, apiImageUrl };
