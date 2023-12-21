import React from "react";
import PropTypes from "prop-types";
import { defaultImageUrl } from "../../constant";

const Card = ({ title, content, imageUrl, onClick }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      {imageUrl ? (
        <img
          src={imageUrl}
          alt="Card"
          className="w-full h-64"
          onError={(e) => (e.target.src = defaultImageUrl)}
        />
      ) : (
        <img src={defaultImageUrl} alt="No Preview" className="w-full" />
      )}
      <div className="px-6 py-4">
        {title && <div className="font-bold text-xl mb-2">{title}</div>}
        {content && <p className="text-gray-700 text-base">{content}</p>}
      </div>
      {onClick && (
        <div className="px-6 py-4">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={onClick}
          >
            Click me
          </button>
        </div>
      )}
    </div>
  );
};

Card.propTypes = {
  title: PropTypes.string,
  content: PropTypes.string,
  imageUrl: PropTypes.string,
  onClick: PropTypes.func,
};

export default Card;
