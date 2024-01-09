import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

const Tooltip = ({ content, position, children, mode }) => {
    const [isTooltipVisible, setTooltipVisible] = useState(false);
    const [theme, setTheme] = useState("light");

    useEffect(() =>{
        if(mode && mode === "light"){
            setTheme("bg-white text-black border border-black");
        }else if(mode && mode === "dark"){
            setTheme("bg-black text-white")
        }
    }, [mode]);
  
    const handleMouseEnter = () => {
      setTooltipVisible(true);
    };
  
    const handleMouseLeave = () => {
      setTooltipVisible(false);
    };
  
    return (
      <div className="relative inline-block" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        {children}
        {isTooltipVisible && (
          <div
            className={`tooltip  ${theme} p-2 rounded-md absolute w-full px-4 py-4 ${getPositionClass(position)}`}
            style={{ zIndex: 9999 }}
          >
            <div className="max-w-xs">{content}</div>
          </div>
        )}
      </div>
    );
  };
  
  const getPositionClass = (position) => {
    switch (position) {
      case 'top':
        return 'bottom-full left-1/2 transform -translate-x-1/2';
      case 'right':
        return 'top-1/2 left-full transform -translate-y-1/2';
      case 'bottom':
        return 'top-full left-1/2 transform -translate-x-1/2';
      case 'left':
        return 'top-1/2 right-full transform -translate-y-1/2';
      default:
        return '';
    }
  };
  
  Tooltip.propTypes = {
    content: PropTypes.string.isRequired,
    position: PropTypes.oneOf(['top', 'right', 'bottom', 'left']),
    children: PropTypes.node.isRequired,
  };
  
  Tooltip.defaultProps = {
    position: 'top',
  };
  
  export default Tooltip;
