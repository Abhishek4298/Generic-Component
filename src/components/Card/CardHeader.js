import React from "react";
import PropTypes from "prop-types";

const CardHeader = ({ children }) => {
  return <div className="px-6 py-4">{children}</div>;
};

CardHeader.propTypes = {
  children: PropTypes.node,
};

export default CardHeader;
