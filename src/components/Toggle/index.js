import React from "react";
import PropTypes from "prop-types";
import { useTheme } from "../../ThemeContext";

const ToggleSwitch = ({
  className,
  switchContainerClassName,
  containerColorDark,
  containerColorLight,
  buttonColor,
  labelSize,
  buttonSize,
  darkIcon,
  lightIcon,
  darkIconSize,
  lightIconSize,
  ...props
}) => {
  const { theme, toggleTheme } = useTheme();

  const handleToggle = () => {
    toggleTheme();
  };

  const getSwitchContainerStyle = () => {
    let containerColor =
      theme === "dark" ? containerColorDark : containerColorLight;
    return {
      backgroundColor:
        containerColor || (theme === "dark" ? "white" : "gray"),
      width: labelSize || "2rem",
      height: labelSize ? `${parseFloat(labelSize) / 2}rem` : "1rem",
      borderRadius: "1rem",
      display: "flex",
      alignItems: "center",
      padding: "0.1rem",
      position: "relative",
    };
  };

  const getToggleButtonStyle = () => {
    return {
      backgroundColor: buttonColor || (theme === "dark" ? "whitesmoke" : "whitesmoke"),
      width: buttonSize || "1.5rem",
      height: buttonSize || "1.5rem",
      borderRadius: "50%",
      position: "absolute",
      top: "50%",
      transform: `translate(-50%, -50%) translateX(${
        theme === "dark" ? "100%" : "0"
      })`,
      transition: "transform 0.3s ease-in-out",
      zIndex: 2,
    };
  };

  const getIconStyle = (size, position) => {
    return {
      fontSize: size || (theme === "dark" ? darkIconSize : lightIconSize) || "1.5rem",
      zIndex: 1,
      position: "absolute",
      top: "50%",
      transform: "translateY(-50%)",
      left: position === "left" && theme === "light" ? "0.2rem" : "auto",
      right: position === "right" && theme === "dark" ? "auto" : "0.2rem",
      color: theme === "dark" ? "black" : "white",
    };
  };

  return (
    <div className={`flex ${className}`}>
      <label
        className={`relative inline-block rounded-full cursor-pointer transition-all duration-300 ${switchContainerClassName}`}
        style={getSwitchContainerStyle()}
      >
        <span
          className={`${theme === "dark" ? "text-black" : "text-white"}`}
          style={getIconStyle("left")}
        >
          {darkIcon}
        </span>
        <input
          type="checkbox"
          checked={theme === "dark"}
          onChange={handleToggle}
          className="opacity-0 w-0 h-0"
          {...props}
        />
        <span
          className={`absolute rounded-full transition-all duration-300`}
          style={getToggleButtonStyle()}
        ></span>
        {theme !== "dark" && (
          <span
            className={`${theme === "dark" ? "text-black" : "text-white"}`}
            style={getIconStyle("right")}
          >
            {lightIcon}
          </span>
        )}
      </label>
    </div>
  );
};

ToggleSwitch.propTypes = {
  className: PropTypes.string,
  switchContainerClassName: PropTypes.string,
  containerColorDark: PropTypes.string,
  containerColorLight: PropTypes.string,
  buttonColor: PropTypes.string,
  labelSize: PropTypes.string,
  buttonSize: PropTypes.string,
  darkIcon: PropTypes.node,
  lightIcon: PropTypes.node,
  darkIconSize: PropTypes.string,
  lightIconSize: PropTypes.string,
};

export default ToggleSwitch;