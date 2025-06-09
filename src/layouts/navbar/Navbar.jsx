import "./Navbar.style.scss";
import { isAuthenticated } from "@/utils/auth.js";
import ProfileIcon from "@/layouts/navbar/components/ProfileIcon.jsx";
import IconButton from "@/styles/icon-button/IconButton.jsx";
import Typography from "@/styles/typography/Typography.jsx";
import { Link } from "@mui/material";

export default function Navbar() {
  return (
    <div className="navbar__wrapper">
      <div className="navbar">
        {/*  TODO:replace with styled component from src/styled*/}
        <Link className="navbar__link" href="/">
          <Typography variant="h2">CineGo</Typography>
        </Link>
        {isAuthenticated() ? (
          <ProfileIcon />
        ) : (
          <div className="navbar__login">
            <a href="/sign-in">
              <IconButton icon="line-md:login" size={30} />
            </a>
          </div>
        )}
      </div>
    </div>
  );
}
