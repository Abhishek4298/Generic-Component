import React from 'react';

const useIcon = (icon, iconPosition) => {
  const iconElement = icon ? <span className={`icon ${iconPosition === 'left' ? 'mr-2' : 'ml-2'}`}>{icon}</span> : null;
  return { iconElement };
};

export default useIcon;
