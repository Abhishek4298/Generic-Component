import React from "react";
import useIcon from "../../hooks/useIcon";

const Button = ({
  children,
  color,
  borderColor,
  rounded,
  icon,
  iconPosition,
  onClick,
  size,
  ...props
}) => {
  const { iconElement } = useIcon(icon, iconPosition);
  const handleClick = (event) => {
    if (onClick && typeof onClick === "function") {
      onClick(event);
    }
  };

  const baseClasses =
    "inline-flex items-center justify-center px-4 py-2 font-semibold focus:outline-none";
  const colorClasses = color.length
    ? `text-black bg-${color}-500 hover:bg-${color}-600`
    : "text-white bg-blue-500 hover:bg-blue-600";
  const borderClasses = borderColor?.length ? `border border-${borderColor}-500` : "";
  const roundedClasses = rounded?.length ? `rounded-${rounded}` : "rounded";
  const sizeClass = size ? `text-${size}` : "text-md";
  const classes = `${baseClasses} ${colorClasses} ${borderClasses} ${roundedClasses} ${sizeClass}`;

  return (
    <button className={classes} {...props} onClick={handleClick}>
      {iconPosition === "left" && iconElement}
      <span className="flex-grow">{children}</span>
      {iconPosition === "right" && iconElement}
    </button>
  );
};

export default Button;
