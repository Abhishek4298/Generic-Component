import React from "react";
import PropTypes from "prop-types";

const Card = ({ children, width, height, backgroundColor, className,hoverEffect }) => {
  const cardStyles = {
    width: width ? `${width}px` : "auto",
    height: height ? `${height}px` : "auto",
    backgroundColor: backgroundColor || "white",
  };


  return (
    <div style={cardStyles} className={`${hoverEffect?'transform transition-transform duration-200 hover:scale-110':''} rounded overflow-hidden shadow-lg ${className}`}>
      {children}
    </div>
  );
};

Card.propTypes = {
  children: PropTypes.node.isRequired,
  width: PropTypes.number,
  height: PropTypes.number,
  backgroundColor: PropTypes.string,
  className: PropTypes.string,
  hoverEffect: PropTypes.bool
};

export default Card;
