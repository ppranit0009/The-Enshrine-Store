function ProductImage({ src, alt }) {
  return (
    <img
      src={src}
      alt={alt}
      style={{
        width: '100%',
        maxHeight: '330px',
        objectFit: 'contain',
        background: 'var(--lav)',
        borderRadius: '18px',
        margin: '12px 0'
      }}
    />
  )
}

export default ProductImage
