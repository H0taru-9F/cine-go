// Material UI
import { Box, LinearProgress } from "@mui/material";

// Components
import Image from "../../../styles/image/Image.jsx";
import images from "@/assets";

// Style
import "./style.scss";

const PageLoader = () => {
  return (
    <Box className="page-loader">
      <Image src={images.logo} alt="logo" width="100" />
      <LinearProgress color="inherit" className="linear-progress" />
    </Box>
  );
};

export default PageLoader;
