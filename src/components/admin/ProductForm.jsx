import { useState } from 'react'
import { CATS } from '../../data'

function ProductForm({ product, categories, onSave, onCancel }) {
  const [formData, setFormData] = useState(product || {
    id: 'p-' + Date.now(),
    cat: 'Lamps',
    sub: 'Glow Lamps',
    name: 'New Product',
    desc: '',
    price: 'From ₹',
    img: '/assets/mascot-gift.png',
    custom: false
  })

  const handleSubmit = () => {
    onSave(formData)
  }

  return (
    <div className="modal show">
      <div className="modal-box">
        <div className="modal-head">
          <h2 style={{ fontFamily: '"Playfair Display", serif', fontWeight: 600, fontSize: '28px' }}>
            {product ? 'Edit' : 'Add'} product
          </h2>
          <button className="close" onClick={onCancel}>×</button>
        </div>
        <div className="form-grid">
          <div className="field full">
            <label>Name</label>
            <input
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            />
          </div>
          <div className="field">
            <label>Category</label>
            <select
              value={formData.cat}
              onChange={(e) => setFormData({ ...formData, cat: e.target.value })}
            >
              {categories.map(c => <option key={c} value={c}>{c}</option>)}
            </select>
          </div>
          <div className="field">
            <label>Sub-category</label>
            <input
              value={formData.sub}
              onChange={(e) => setFormData({ ...formData, sub: e.target.value })}
            />
          </div>
          <div className="field">
            <label>Price label</label>
            <input
              value={formData.price}
              onChange={(e) => setFormData({ ...formData, price: e.target.value })}
            />
          </div>
          <div className="field">
            <label>Image path</label>
            <input
              value={formData.img}
              onChange={(e) => setFormData({ ...formData, img: e.target.value })}
            />
          </div>
          <div className="field full">
            <label>Description</label>
            <textarea
              value={formData.desc}
              onChange={(e) => setFormData({ ...formData, desc: e.target.value })}
            />
          </div>
          <div className="field">
            <label>
              <input
                type="checkbox"
                checked={formData.custom}
                onChange={(e) => setFormData({ ...formData, custom: e.target.checked })}
              /> Customisable
            </label>
          </div>
        </div>
        <button
          className="btn primary"
          style={{ width: '100%', marginTop: '16px' }}
          onClick={handleSubmit}
        >
          Save product
        </button>
      </div>
    </div>
  )
}

export default ProductForm
