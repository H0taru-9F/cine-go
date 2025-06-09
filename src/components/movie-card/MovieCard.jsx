import React from "react";
import { Box, Card, CardActionArea, CardMedia } from "@mui/material";
import { Link } from "react-router-dom";
import "./MovieCard.scss";
import IconButton from "@/styles/icon-button/IconButton.jsx";
import Overlay from "@/styles/overlay/Overlay.jsx";
import Typography from "@/styles/typography/Typography.jsx";

function MovieCard({ title, showTime, trailerUrl, imageUrl, isLink, linkTo }) {
  const cardContent = (
    <>
      <CardMedia
        component="img"
        image={imageUrl}
        alt={title || "Movie poster"}
        className="movie-card__media"
      />
      <Overlay direction="to-top" />

      <Box className="movie-card__overlay">
        <div className="movie-card__overlay__text">
          {title && <Typography variant="h3">{title}</Typography>}
          {showTime && <Typography variant="p">{showTime}</Typography>}
        </div>
        {!title && trailerUrl && (
          <div>
            <IconButton
              size={50}
              icon="ic:round-play-circle-outline"
              text="Play trailer"
              onClick={() => window.open(trailerUrl, "_blank")}
            />
          </div>
        )}
      </Box>
    </>
  );

  if (isLink && linkTo) {
    return (
      <Link to={linkTo}>
        <CardActionArea>
          <Card className="movie-card">{cardContent}</Card>
        </CardActionArea>
      </Link>
    );
  }

  return <Card className="movie-card">{cardContent}</Card>;
}

export default MovieCard;
