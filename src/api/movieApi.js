import axiosClient from "./config/axiosClient";

const movieApi = {
  getMovieDetails: (movieId) => {
    const url = `/films/${movieId}`;
    return axiosClient.get(url);
  },

  getMoviesByGenre: (genre) => {
    const url = `/genres/${genre}/films`;
    return axiosClient.get(url);
  },
};

export default movieApi;
