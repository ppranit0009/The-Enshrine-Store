function ReviewCard({ review }) {
  const renderStars = (rating) => {
    return Array(5).fill(0).map((_, i) => (
      <span key={i} className={`star ${i < rating ? 'filled' : ''}`}>★</span>
    ))
  }

  return (
    <div className="review-card">
      <div className="review-image">
        <img src={review.image} alt={review.product} />
      </div>
      <div className="review-content">
        <div className="review-header">
          <div className="reviewer-name">{review.name}</div>
          <div className="review-rating">{renderStars(review.rating)}</div>
        </div>
        <div className="review-product">{review.product}</div>
        <p className="review-text">{review.review}</p>
        <div className="review-date">{review.date}</div>
      </div>
    </div>
  )
}

export default ReviewCard
