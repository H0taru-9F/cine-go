import { useState } from "react";
import images from "@/assets/index.js";

function Image({
  src,
  alt,
  className,
  fallback: customFallback = images.noCoverPlaceholder,
  ...props
}) {
  const [fallback, setFallback] = useState("");

  const handleError = () => setFallback(customFallback);

  return (
    <img className={className} alt={alt} src={src || fallback} {...props} onError={handleError} />
  );
}

export default Image;
