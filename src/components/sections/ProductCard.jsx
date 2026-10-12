function ProductCard({ product, onCustomClick, onViewProduct }) {
  return (
    <article className="product">
      <div className="pimg">
        <img src={product.img} alt={product.name} />
      </div>
      <div className="pbody">
        <div className="tag">{product.sub}</div>
        <h3>{product.name}</h3>
        <p>{product.desc}</p>
        <div className="price">{product.price}</div>
        <div className="card-actions">
          <button className="smallbtn" onClick={() => onViewProduct(product.id)}>View</button>
          <button
            className="smallbtn primary"
            onClick={() => onCustomClick(product.name)}
          >
            {product.custom ? 'Customise' : 'Enquire'}
          </button>
        </div>
      </div>
    </article>
  )
}

export default ProductCard
