import React, { useState } from "react";
import { tw } from "@twind/react";

const RatingReview = ({
  allowReview,
  ratingSize,
  ratingColor,
  ratingColorStrength,
  reviewSize,
  reviewColor,
  reviewColorStrength,
  className,
  reviewBorder,
  reviewBorderStrength,
  reviewMaxCharacter,
  reviewPlaceholder
}) => {
  const [rating, setRating] = useState(0);
  const [review, setReview] = useState("");
  const [showReview, setShowReview] = useState(false);
  const [error, setError] = useState("");

  const handleStarClick = (selectedRating) => {
    setRating(selectedRating);
  };

  const handleReviewChange = (event) => {
    const newReview = event.target.value;
    if (!reviewMaxCharacter || newReview.length <= reviewMaxCharacter) {
      setReview(newReview);
    }
  };

  const handleShowReview = () => {
    if (review.trim() === "") {
      setError("Write your review first");
    } else {
      setShowReview(true);
      setError("");
    }
  };

  const ratingStyle = {
    ratingSize: tw`text-[${ratingSize}px]` || "text-lg",
    ratingColor:
      tw`text-${ratingColor}-${ratingColorStrength}` || "text-yellow-400",
  };

  const reviewStyle = {
    reviewSize: tw`text-[${reviewSize}px]` || "text-md",
    reviewColor: tw`text-${reviewColor}-${reviewColorStrength}` || "text-black",
    className: tw`${className}` || "",
    reviewBorder:
      tw`border border-${reviewBorder}-${reviewBorderStrength}` ||
      "border border-black",
  };

  const getStarColor = (star) => {
    if (rating > 0 && star <= rating) {
      return rating < 3
        ? tw`text-red-500`
        : rating >= 3 && rating < 5
        ? ratingStyle.ratingColor
        : rating === 5
        ? tw`text-green-500`
        : tw`text-gray-300`;
    }
    return tw`text-gray-300`;
  };

  return (
    <>
      <div className="flex justify-center items-center">
        {[1, 2, 3, 4, 5].map((star) => (
          <span
            key={star}
            onClick={() => handleStarClick(star)}
            className={`cursor-pointer ${ratingStyle.ratingSize} ${getStarColor(
              star
            )}`}
          >
            ★
          </span>
        ))}
      </div>

      <div className="flex flex-col items-center justify-center">
        {allowReview && rating > 0 && !showReview && (
          <>
            <textarea
              placeholder= {reviewPlaceholder}
              value={review}
              onChange={handleReviewChange}
              className={`${reviewStyle.reviewColor} ${reviewStyle.reviewSize} ${reviewStyle.reviewBorder} sm:w-full md:w-7/12 lg:w-4/12`}
            />
             {error && <p className="text-red-500 mt-2">{error}</p>}
            <div className="flex justify-between items-start mt-4 sm:w-full md:w-7/12 lg:w-4/12">
              <button
                onClick={handleShowReview}
                className="p-2 bg-blue-500 text-white rounded cursor-pointer"
              >
                Submit Review
              </button>
              {reviewMaxCharacter && (
                <span className="text-gray-500">{`${review.length}/${reviewMaxCharacter}`}</span>
              )}
            </div>
          </>
        )}

        {showReview && review && (
          <div className={`mt-2 ${reviewStyle.reviewSize}`}>{review}</div>
        )}
      </div>
    </>
  );
};

export default RatingReview;
