import "@/styles/loader/Loader.style.scss";
import Icon from "@/styles/icon/Icon.jsx";

export default function Loader({ size = "md", fullScreen }) {
  return (
    <div
      role="status"
      aria-live="polite"
      aria-label="Loading"
      className={`loader loader--${fullScreen}`}
    >
      <Icon icon="line-md:loading-loop" color="white" className={`loader--${size}`} />
    </div>
  );
}
