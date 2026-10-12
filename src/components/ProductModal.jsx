import ModalHeader from './modals/ModalHeader'
import ProductImage from './modals/ProductImage'
import ProductDetails from './modals/ProductDetails'

function ProductModal({ product, onClose, onCustomize }) {
  if (!product) return null

  return (
    <div className="modal show">
      <div className="modal-box">
        <ModalHeader title={product.name} onClose={onClose} eyebrow="PRODUCT" />
        <ProductImage src={product.img} alt={product.name} />
        <ProductDetails description={product.desc} price={product.price} />
        <button
          className="btn primary"
          style={{ width: '100%' }}
          onClick={onCustomize}
        >
          Customise / enquire about this →
        </button>
      </div>
    </div>
  )
}

export default ProductModal
