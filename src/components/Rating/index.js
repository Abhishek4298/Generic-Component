import React, { useState } from 'react';

const StarRating = ({ totalStars, initialRating, onChange, color, size }) => {
  const [rating, setRating] = useState(initialRating || 0);

  const handleStarClick = (selectedRating) => {
    setRating(selectedRating);
    if (onChange) {
      onChange(selectedRating);
    }
  };

  return (
    <div>
      {[...Array(totalStars).keys()].map((index) => (
        <span
          key={index}
          onClick={() => handleStarClick(index + 1)}
          className={`cursor-pointer ${size} ${
            index + 1 <= rating ? `${color}` : 'text-gray-300'
          }`}
        >
          ★
        </span>
      ))}
    </div>
  );
};

export default StarRating;
