import Image from "@/styles/image/Image.jsx";
import images from "@/assets/index.js";
import Typography from "@/styles/typography/Typography.jsx";
import "@/pages/movie-details/components/actors/actor-card/ActorCard.style.scss";

export default function ActorCard({ firstName, lastName, photo }) {
  console.log(photo);

  return (
    <div className="actor-card">
      <Image
        className="actor-card__image"
        src={images.noTitlePlaceholder}
        alt={"actor " + firstName + " " + lastName}
      />
      <Typography className="actor-card__name" variant="h4">
        {firstName} {lastName}
      </Typography>
    </div>
  );
}
