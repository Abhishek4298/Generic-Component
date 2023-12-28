import React from 'react';

const Tooltip = ({ text, position, children }) => {
  const getPositionClasses = () => {
    switch (position) {
      case 'top':
        return 'bottom-full left-1/2 transform -translate-x-1/2';
      case 'right':
        return 'top-1/2 right-full transform -translate-y-1/2';
      case 'bottom':
        return 'top-full left-1/2 transform -translate-x-1/2';
      case 'left':
        return 'top-1/2 left-full transform -translate-y-1/2';
      default:
        return 'bottom-full left-1/2 transform -translate-x-1/2';
    }
  };

  return (
    <div className="relative inline-block">
      {children}
      <div
        className={`absolute bg-gray-800 text-white p-2 rounded-md text-sm ${getPositionClasses()} opacity-0 hover:opacity-100 transition-opacity duration-300`}
      >
        {text}
      </div>
    </div>
  );
};

export default Tooltip;
