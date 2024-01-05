import React from "react";
import PropTypes from "prop-types";

const CardBody = ({ children }) => {
  return (
    <div className="px-6 py-4 rounded overflow-hidden">
      {children}
    </div>
  );
};

CardBody.propTypes = {
  children: PropTypes.node,
};

export default CardBody;
