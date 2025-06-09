import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Box, Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import MovieCard from "@/components/movie-card/MovieCard.jsx";
import "./ScreeningsListingSection.style.scss";
import { addDays, format, parseISO } from "date-fns";
import ErrorLayout from "@/layouts/error-layout/ErrorLayout.jsx";
import actGetScreeningDateRange from "@/store/screening/actions/byDateRange.js";
import Loader from "@/styles/loader/Loader.jsx";
import images from "@/assets/index.js";

export default function ScreeningsListingSection({
  startDate,
  endDate,
  interval = 3,
  label = "Movie",
}) {
  const dispatch = useDispatch();
  const screeningList = useSelector((state) => state.screeningDateRange.data);
  const loading = useSelector((state) => state.screeningDateRange.loading);
  const error = useSelector((state) => state.screeningDateRange.error);

  useEffect(() => {
    const startDateToFetch = startDate ?? format(new Date(), "yyyy-MM-dd");

    const startDateObj = parseISO(startDateToFetch);
    const endDateObj = addDays(startDateObj, interval);

    const endDateToFetch = endDate ?? format(endDateObj, "yyyy-MM-dd");

    dispatch(actGetScreeningDateRange(startDateToFetch, endDateToFetch));
  }, [dispatch, startDate, endDate, interval]);

  const allMovies = (screeningList || []).slice(0, 4);

  if (loading) {
    return <Loader size="lg" fullScreen="full-screen" />;
  }

  if (error) {
    return <ErrorLayout errorMessage={error.message} />;
  }

  if (!allMovies || allMovies.length === 0) {
    return (
      <Box className="movie-listing-section">
        <Box className="movie-listing-section__category">
          <Typography variant="h6" align="center" sx={{ mt: 4 }}>
            No movies available for this date.
          </Typography>
        </Box>
      </Box>
    );
  }

  return (
    <Box className="movie-listing-section">
      <Box className="movie-listing-section__category">
        <Box className="movie-listing-section__header">
          <Typography variant="h5" className="movie-listing-section__title">
            {label}
          </Typography>
          <Link to="/">
            <Button variant="text" className="movie-listing-section__see-more">
              see more →
            </Button>
          </Link>
        </Box>
        <Box className="movie-listing-section__list">
          {allMovies?.map((movie) => (
            <Box key={movie.id} className="movie-listing-section__list-item">
              <MovieCard
                title={movie.film.title}
                showTime={format(parseISO(movie.date), "d MMMM")}
                imageUrl={images.noTitlePlaceholder}
                isLink={true}
                linkTo={`/film/${movie.film.id}`}
              />
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
}
