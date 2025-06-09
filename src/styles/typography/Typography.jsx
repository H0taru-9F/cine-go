import { forwardRef } from "react";
import "@/styles/typography/Typography.style.scss";

const getDefaultTag = (variant, inline) => {
  if (["h1", "h2", "h3", "h4"].includes(variant)) {
    return variant;
  }

  if (variant === "q") {
    return "em";
  }

  return inline ? "span" : "p";
};

const Component = (
  {
    variant = "p", // "h1" | "h2" | "h3" | "h4" | "p" | "q"
    inline = false,
    as,
    className = "",
    children,
    ...props
  },
  ref,
) => {
  const TextComponent = as || getDefaultTag(variant, inline);

  const classes = [
    "app-typography",
    `app-typography--${variant}`,
    inline ? "app-typography--inline" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <TextComponent ref={ref} className={classes} {...props}>
      {children}
    </TextComponent>
  );
};

Component.displayName = "Typography";
export default forwardRef(Component);
