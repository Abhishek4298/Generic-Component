import React from "react";
import { useTheme } from "../../ThemeContext";

const ToggleSwitch = () => {
  const { theme, toggleTheme } = useTheme();

  const handleToggle = () => {
    toggleTheme();
  };

  return (
    <div className="flex mt-2 ml-4">
      <label
        className={`${
          theme === "dark" ? "bg-gray-800" : "bg-gray-200"
        } relative inline-block w-10 h-6 rounded-full cursor-pointer transition-all duration-300`}
      >
        <input
          type="checkbox"
          checked={theme === "dark"}
          onChange={handleToggle}
          className="opacity-0 w-0 h-0"
        />
        <span
          className={`${
            theme === "dark" ? "translate-x-4" : "translate-x-0"
          } absolute left-0 top-0 w-6 h-6 bg-gray-500 rounded-full transition-transform duration-300 transform`}
        ></span>
      </label>
    </div>
  );
};

export default ToggleSwitch;
