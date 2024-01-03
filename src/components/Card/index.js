// import React from "react";
// import PropTypes from "prop-types";


// const Card = ({children }) => {
//   return (
//     <div className="max-w-sm rounded overflow-hidden shadow-lg">
//       {children}
//     </div>
//   );
// };

// Card.propTypes = {
//   title: PropTypes.string,
//   content: PropTypes.string,
//   imageUrl: PropTypes.string,
//   onClick: PropTypes.func,
// };

// export default Card;

// // TODO
// // CARD SIZE

import React from "react";
import PropTypes from "prop-types";

const Card = ({ children, width, height }) => {
  const cardStyles = {
    width: width ? `${width}px` : "auto",
    height: height ? `${height}px` : "auto",
  };

  return (
    <div style={cardStyles} className="rounded overflow-hidden shadow-lg">
      {children}
    </div>
  );
};

Card.propTypes = {
  children: PropTypes.node.isRequired,
  width: PropTypes.number,
  height: PropTypes.number,
};

export default Card;
