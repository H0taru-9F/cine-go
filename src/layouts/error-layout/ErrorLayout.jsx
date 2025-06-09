import React from "react";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";

import "./ErrorLayout.style.scss";
import Icon from "@/styles/icon/Icon.jsx";

export default function ErrorLayout({
  backButtonPath,
  errorMessage = "Something went wrong",
  buttonLabel = "Go Back",
  size = "normal",
}) {
  if (size === "small") {
    return (
      <>
        <Typography variant="body1" className="error-description">
          We encountered an unexpected error. Please try:
        </Typography>
        <List className="error-list">
          <ListItem className="error-list-item">Check your internet connection.</ListItem>
          <ListItem className="error-list-item">Reload the page.</ListItem>
          <ListItem className="error-list-item">If the problem persists, try again later.</ListItem>
        </List>
      </>
    );
  }
  // TODO: replace with styled components
  return (
    <Box className="error-container">
      <Box className="error-fallback">
        <Box className="error-header">
          <Icon size={30} icon="material-symbols:error-outline-rounded" />
          <Typography component="h4" className="error-title">
            {errorMessage}
          </Typography>
        </Box>
        <Typography variant="body2" className="error-description">
          We encountered an unexpected error. Please try the following:
        </Typography>
        <ul className="error-list">
          <li className="error-list-item">Check your internet connection.</li>
          <li className="error-list-item">Reload the page.</li>
          <li className="error-list-item">If the problem persists, try again later.</li>
        </ul>
        {backButtonPath && (
          <Box className="button-group">
            <Button
              component={Link}
              to={backButtonPath}
              variant="contained"
              className="book-now-button"
            >
              {buttonLabel}
            </Button>
          </Box>
        )}
      </Box>
    </Box>
  );
}
