import Section from "@/components/section/Section.jsx";
import MovieCard from "@/components/movie-card/MovieCard.jsx";
import images from "@/assets/index.js";
import "@/pages/movie-details/components/movie-details-section/MovieDetailsSection.style.scss";
import Typography from "@/styles/typography/Typography.jsx";
import Button from "@/styles/button/Button.jsx";

export default function MovieDetailsSection({ movieDetails }) {
  return (
    <Section className="movie-details-section">
      <div className="movie-details-section__card">
        <MovieCard
          imageUrl={images.noTitlePlaceholder}
          movieDetails={{ trailerUrl: movieDetails?.trailerUrl }}
        />
      </div>
      <div className="movie-details-section__content">
        <Typography variant="h2">{movieDetails?.title}</Typography>
        <Typography variant="p">{movieDetails?.description || "N/A"}</Typography>
        <Typography variant="h4">
          Release Date: {<Typography variant="q">{movieDetails?.releaseDate || "N/A"}</Typography>}
        </Typography>
        <Typography variant="h4">
          Duration:{" "}
          {
            <Typography variant="q">
              {movieDetails?.durationFilmInMinutes + " min" || "N/A"}
            </Typography>
          }
        </Typography>
        <Typography variant="h4">
          Genre:{" "}
          {
            <Typography variant="q">
              {movieDetails?.genres.map((genre) => genre.name).join(" ") || "N/A"}
            </Typography>
          }
        </Typography>
        <Typography variant="h4">
          Country: {<Typography variant="q">{movieDetails?.country}</Typography>}
        </Typography>
        <Typography variant="h4">
          Director: {<Typography variant="q">{movieDetails?.director}</Typography>}
        </Typography>
        <Typography variant="h4">
          Age restriction: {<Typography variant="q">{movieDetails?.ageRestriction}</Typography>}
        </Typography>
        <Typography variant="h4">
          Rating:{" "}
          {
            <Typography inline variant="p">
              {movieDetails?.rating}
            </Typography>
          }
        </Typography>
        <div className="movie-details-section__content__buttons">
          <Button size="lg" to={`/booking/${movieDetails?.id}`}>
            Book now
          </Button>
          <Button variant="secondary" size="lg">
            Write a review
          </Button>
        </div>
      </div>
    </Section>
  );
}
