import React from 'react'

const StarRating = ({rating}) => {

  return (
    <>
    {[1,2,3,4,5].map((star) => (
        <i
          key={star}
          className={
            star <= rating
              ? "fa fa-star text-warning"
              : "fa fa-star text-muted"
          }
        ></i>
      ))}
      </>
  )
}

export default StarRating