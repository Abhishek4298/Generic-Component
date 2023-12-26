import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const ProgressBar = ({ duration, onComplete, onCompleteAnimation, barColor, bgColor, height }) => {
  const [progress, setProgress] = useState(0);
  const [animationComplete, setAnimationComplete] = useState(false);

  useEffect(() => {
    let startTime;
    let animationFrameId;

    const startAnimation = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const progressValue = (elapsed / duration) * 100;

      setProgress((prevProgress) => Math.min(progressValue, 100));

      if (progressValue < 100) {
        animationFrameId = requestAnimationFrame(startAnimation);
      } else {
        setAnimationComplete(true);
        onCompleteAnimation();
        onComplete();
      }
    };

    animationFrameId = requestAnimationFrame(startAnimation);

    return () => cancelAnimationFrame(animationFrameId);
  }, [duration, onComplete, onCompleteAnimation]);

  return (
    <div className={`relative w-full ${height}`}>
      <div
        className={`absolute top-0 left-0 h-full bg-${bgColor} transition-all duration-500`}
        style={{
          width: animationComplete ? '100%' : '0%',
          opacity: animationComplete ? 0 : 1,
        }}
      ></div>
      <div
        className={`absolute top-0 left-0 h-full bg-${barColor} transition-all duration-500`}
        style={{
          width: `${progress}%`,
          opacity: animationComplete ? 1 : 0,
        }}
      ></div>
      <div
        className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ${
          animationComplete ? 'opacity-100' : 'opacity-0'
        }`}
      >
        {animationComplete && (
          <span className="text-white font-bold">Progress Complete!</span>
        )}
      </div>
    </div>
  );
};

ProgressBar.propTypes = {
  duration: PropTypes.number.isRequired,
  onComplete: PropTypes.func.isRequired,
  onCompleteAnimation: PropTypes.func,
  barColor: PropTypes.string,
  bgColor: PropTypes.string,
  height: PropTypes.string,
};

ProgressBar.defaultProps = {
  barColor: 'green-500',
  bgColor: 'gray-300',
  height: '20px',
  onCompleteAnimation: () => {},
};

export default ProgressBar;
