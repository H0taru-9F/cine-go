import "@/styles/icon-button/IconButton.style.scss";
import StyledIcon from "@/styles/icon/Icon.jsx";
import Typography from "@/styles/typography/Typography.jsx";
import { Link } from "react-router-dom";

export default function IconButton({
  icon,
  size = 20,
  text = "",
  iconPosition = "left",
  onClick,
  disabled = false,
  className = "",
  to,
  ...props
}) {
  const hasText = Boolean(text);
  const isIconRight = iconPosition === "right";
  const ButtonComponent = to ? Link : "button";

  return (
    <ButtonComponent
      type="button"
      className={[
        "icon-button",
        isIconRight ? "icon-button--icon-right" : "icon-button--icon-left",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      {!isIconRight && icon && <StyledIcon icon={icon} size={size} className="icon-button__icon" />}
      {hasText && (
        <Typography variant="h4" className="icon-button__text">
          {text}
        </Typography>
      )}
      {isIconRight && icon && <StyledIcon icon={icon} size={size} className="icon-button__icon" />}
    </ButtonComponent>
  );
}
