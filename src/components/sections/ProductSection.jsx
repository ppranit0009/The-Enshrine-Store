import ProductCard from './ProductCard'

function ProductSection({ category, products, onCustomClick, onViewProduct }) {
  const getCategoryDescription = (cat) => {
    if (cat === 'Lamps') return 'Soft ambient lighting and memory lamps for desks, rooms and cosy corners.'
    if (cat === 'OLED & Electronics') return 'Tiny interactive tech with OLED screens, expressive faces and animations.'
    return '3D printed desk objects, mascots and collectible decor pieces.'
  }

  const categoryProducts = products.filter(p => p.cat === category)

  if (!categoryProducts.length) return null

  return (
    <div className="product-section">
      <div className="section-head">
        <div>
          <span className="eyebrow">{category}</span>
          <h2>{category}</h2>
        </div>
        <p>{getCategoryDescription(category)}</p>
      </div>
      <div className="grid">
        {categoryProducts.map(product => (
          <ProductCard
            key={product.id}
            product={product}
            onCustomClick={onCustomClick}
            onViewProduct={onViewProduct}
          />
        ))}
      </div>
    </div>
  )
}

export default ProductSection
