import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import "./styles.css";

const ProgressBar = ({ progress }) => {
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
    <div className="progress-container">
      <div className="progress-bar" style={{ width: `${width}%` }}>
        {width}%
      </div>
    </div>
  );
};

ProgressBar.propTypes = {
  progress: PropTypes.number.isRequired,
};

export default ProgressBar;
