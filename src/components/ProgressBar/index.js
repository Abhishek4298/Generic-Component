import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

const ProgressBar = ({ progress, barColor, barHeight}) => {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const updateInterval = 20;

    const update = () => {
      setWidth((prevWidth) =>
        Math.min(prevWidth + 100 / updateInterval, progress)
      );
    };

    const intervalId = setInterval(update, updateInterval);

    if (width === progress) {
      clearInterval(intervalId);
    }

    return () => clearInterval(intervalId);
  }, [progress, width]);

  return (
    <div className={`relative  w-full  ${barHeight} bg-gray-300 rounded overflow-hidden`}>
      <div
        className={`${barHeight} ${barColor} text-white text-center leading-8 transition-all duration-200`}
        style={{ width: `${width}%`}}
      >
        {width}%
      </div>
    </div>
  );
};

ProgressBar.propTypes = {
  progress: PropTypes.number.isRequired,
};

export default ProgressBar;

