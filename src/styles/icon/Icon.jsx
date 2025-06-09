import { Icon } from "@iconify/react";

const StyledIcon = ({ size = 20, ...iconProps }) => {
  return <Icon width={size} height={size} aria-hidden="true" {...iconProps} />;
};

export default StyledIcon;
