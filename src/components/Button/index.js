import React from "react";
import { PropTypes } from "prop-types";
import useIcon from "../../hooks/useIcon";
import { tw } from "@twind/react";

const Button = ({
  children,
  color ,
  textColor ,
  colorStrength,
  hoverColor ,
  hoverColorStrength,
  borderColor,
  rounded,
  icon,
  iconPosition,
  onClick,
  size,
  className,
  // BorderSize
  // hoverTextColor
  ...props
}) => {
  const { iconElement } = useIcon(icon, iconPosition);

  // color and borderColor
  const bgColor = color?.length
    ? tw`bg-${color}-${colorStrength}`
    : "bg-transparent";
  const textColorClass = tw`text-${textColor}-500`;
  const borderColorClass = borderColor
    ? tw`border border-${borderColor}-500`
    : "border black";
  // Base classes
  const baseClasses =
    "inline-flex items-center justify-center px-4 py-2 font-semibold focus:outline-none";

  // Hover classes
  const hoverClasses = tw`hover:bg-${hoverColor}-${hoverColorStrength}`;

  // Color classes
  const colorClasses = color
    ? tw`${bgColor} ${hoverClasses}`
    : "bg-white hover:bg-white";

  // Additional classes
  const roundedClasses = rounded ? tw`rounded-${rounded}` : "rounded";

  // Size
  let sizeClass = "text-md";
  if (size === "small") {
    sizeClass = "text-sm p-2"; // Adjust padding for small size
  } else if (size === "large") {
    sizeClass = "text-lg p-4"; // Adjust padding for large size
  }

  // Combine all classes
  const classes = `${baseClasses} ${colorClasses} ${textColorClass} ${borderColorClass} ${roundedClasses} ${sizeClass} ${className}`;

  // Handle click event
  const handleClick = (event) => {
    if (onClick && typeof onClick === "function") {
      onClick(event);
    }
  };

  return (
    <button className={classes} {...props} onClick={handleClick}>
      {iconPosition === "left" && iconElement}
      <span className="flex-grow">{children}</span>
      {iconPosition === "right" && iconElement}
    </button>
  );
};

Button.propTypes = {
  color: PropTypes.string.isRequired,
};
Button.defaultProps = {
  color: "white",
  textColor: "text-black",
  colorStrength: 500,
  hoverColor: "blue",
  hoverColorStrength: "500",
};

export default Button;

// TODO:
//  Adding  props BorderSize and hoverTextColor
//  Adding color code color="#800080"
//
