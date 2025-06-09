import "@/pages/movie-details/components/similar-movies/SimilarMovies.style.scss";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import actGetMovieByGenre from "@/store/movie/actions/movieByGenre.js";
import ErrorLayout from "@/layouts/error-layout/ErrorLayout.jsx";
import Loader from "@/styles/loader/Loader.jsx";
import MovieCard from "@/components/movie-card/MovieCard.jsx";
import images from "@/assets/index.js";

export default function SimilarMovies({ genres, currentMovieId }) {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.movieByGenre.data);
  const loading = useSelector((state) => state.movieByGenre.loading);
  const error = useSelector((state) => state.movieByGenre.error);

  useEffect(() => {
    if (genres && genres.length > 0) {
      const firstGenreId = genres[0].id;
      dispatch(actGetMovieByGenre(firstGenreId));
    }
  }, [genres, dispatch]);

  if (loading) {
    return <div>Loading similar movies...</div>;
  }

  if (error) {
    return <ErrorLayout errorMessage={error.message} />;
  }

  const filteredFilms = Array.isArray(data)
    ? data.filter((movie) => movie.id !== currentMovieId)
    : [];

  const movies = filteredFilms.slice(0, 4);

  return (
    <div className="movie-listing-section">
      {loading ? (
        <Loader size="lg" />
      ) : (
        <div className="movie-listing-section__list">
          {movies.map((movie) => (
            <div className="movie-listing-section__list-item">
              <MovieCard
                key={movie.id}
                title={movie.title}
                imageUrl={images.noTitlePlaceholder}
                isLink={true}
                linkTo={`/film/${movie.id}`}
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
