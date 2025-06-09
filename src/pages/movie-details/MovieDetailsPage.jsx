import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import React, { useEffect } from "react";
import actFetchMovieDetails from "@/store/movie/actions/movieDetails.js";
import StyledContainer from "@/components/section/Section.jsx";
import MovieDetailsSection from "@/pages/movie-details/components/movie-details-section/MovieDetailsSection.jsx";
import MovieTitleImage from "@/pages/movie-details/components/movie-title-image/MovieTitleImage.jsx";
import "@/pages/movie-details/MovieDetailsPage.style.scss";
import Loader from "@/styles/loader/Loader.jsx";
import ErrorLayout from "@/layouts/error-layout/ErrorLayout.jsx";
import Actors from "@/pages/movie-details/components/actors/Actors.jsx";
import SimilarMovies from "@/pages/movie-details/components/similar-movies/SimilarMovies.jsx";
import Divider from "@mui/material/Divider";

export default function MovieDetailsPage() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.movieDetails.data);
  const loading = useSelector((state) => state.movieDetails.loading);
  const error = useSelector((state) => state.movieDetails.error);

  const { id } = useParams();

  useEffect(() => {
    if (id) {
      dispatch(actFetchMovieDetails(id));
    }
  }, [dispatch, id]);

  if (error) {
    return <ErrorLayout errorMessage={error.message} />;
  }

  return (
    <div className="movie-details-page">
      <MovieTitleImage movieTitle={data?.title} titleImage={data?.titleImage} />
      <StyledContainer>
        {loading ? (
          <Loader size="lg" fullScreen="full-screen" />
        ) : (
          <MovieDetailsSection movieDetails={data} />
        )}
        {loading ? <Loader size="lg" fullScreen="full-screen" /> : <Actors actors={data?.actors} />}
        {/*<Comments />*/}
        <Divider variant="middle" color="white" />
      </StyledContainer>

      {loading ? (
        <Loader size="lg" />
      ) : (
        <SimilarMovies genres={data?.genres} currentMovieId={data?.id} />
      )}
    </div>
  );
}
