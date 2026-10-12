import ReviewCard from './ReviewCard'

function ReviewsSection({ reviews }) {
  return (
    <section className="section compact">
      <div className="section-head">
        <div>
          <span className="eyebrow">CUSTOMER LOVE</span>
          <h2>What people say.</h2>
        </div>
        <p>Real reviews from real customers who've made FIZZ a part of their world.</p>
      </div>
      <div className="reviews-grid">
        {reviews.map(review => (
          <ReviewCard key={review.id} review={review} />
        ))}
      </div>
    </section>
  )
}

export default ReviewsSection
