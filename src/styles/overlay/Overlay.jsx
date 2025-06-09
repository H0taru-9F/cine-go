import "@/styles/overlay/Overlay.style.scss";

export default function Overlay({ direction = "to-bottom" }) {
  return <div className={`overlay overlay__${direction}`} />;
}
