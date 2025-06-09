import "@/pages/movie-details/components/actors/Actors.style.scss";
import Typography from "@/styles/typography/Typography.jsx";
import ActorCard from "@/pages/movie-details/components/actors/actor-card/ActorCard.jsx";

export default function Actors({ actors = [] }) {
  return (
    <>
      <Typography className="actors-title" variant="h2">
        Actors
      </Typography>
      <div className="actors-title__actors">
        {actors.map((actor) => (
          <ActorCard key={actor.id} firstName={actor.firstName} lastName={actor.lastName} />
        ))}
      </div>
    </>
  );
}
