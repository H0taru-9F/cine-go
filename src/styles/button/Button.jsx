import Loader from "@/styles/loader/Loader.jsx";
import Typography from "@/styles/typography/Typography.jsx";
import { Link } from "react-router-dom";
import "@/styles/button/Button.style.scss";

const Button = function ({
  variant = "primary",
  size = "md",
  width = "fit",
  isLoading = false,
  disabled,
  children,
  to,
  className = "",
  ...props
}) {
  const ButtonComponent = to ? Link : "button";
  const additionalButtonProps = to ? { to } : {};

  const computedClassName = [
    "app-button",
    `app-button--${variant}`,
    `app-button--${size}`,
    width === "full" ? "app-button--full" : "",
    isLoading ? "app-button--loading" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <ButtonComponent
      disabled={isLoading || disabled}
      className={computedClassName}
      {...additionalButtonProps}
      {...props}
    >
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <Typography as="span">{children}</Typography>
        </>
      )}
    </ButtonComponent>
  );
};

Button.displayName = "Button";

export default Button;
