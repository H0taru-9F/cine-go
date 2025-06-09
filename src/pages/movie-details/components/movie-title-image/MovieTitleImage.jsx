import Image from "@/styles/image/Image.jsx";
import images from "@/assets/index.js";
import Overlay from "@/styles/overlay/Overlay.jsx";
import "@/pages/movie-details/components/movie-title-image/MovieTitleImage.style.scss";

export default function MovieTitleImage({ movieTitle, titleImage }) {
  console.log(titleImage);

  return (
    <div className="movie-details">
      <Overlay />
      <Image
        className="movie-details__title-image"
        alt={movieTitle}
        src={images.noCoverPlaceholder}
      />
    </div>
  );
}
