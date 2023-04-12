import React from "react";
import Image from "next/image";

export const Rating = ({ value, maxRating = 5 }) => {
  if (!maxRating) {
    return null;
  }
  if (!value) {
    value = 0;
  }
  if (value > maxRating) {
    maxRating = value;
  }

  return (
    <>
      {[...Array(maxRating)].map((_, index) =>
        index < value ? (
          <Image
            key={index}
            src="/images/star-gold.png"
            width={18}
            height={18}
            alt="gold star"
          />
        ) : (
          <Image
            key={index}
            src="/images/star.png"
            width={18}
            height={18}
            alt="gray star"
          />
        )
      )}
    </>
  );
};
