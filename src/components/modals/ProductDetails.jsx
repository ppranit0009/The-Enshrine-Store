function ProductDetails({ description, price }) {
  return (
    <>
      <p style={{ color: 'var(--muted)', lineHeight: '1.7' }}>{description}</p>
      <div style={{ fontWeight: '800', fontSize: '20px', margin: '12px 0' }}>{price}</div>
    </>
  )
}

export default ProductDetails
