import { useState } from 'react'
import { CATS } from '../data'
import AdminLogin from './admin/AdminLogin'
import AdminTable from './admin/AdminTable'
import ProductForm from './admin/ProductForm'

function AdminPanel({ products, isAdmin, onLogin, onLogout, onBack, onSaveProducts, onResetProducts, onViewProduct }) {
  const [editingProduct, setEditingProduct] = useState(null)

  const handleEdit = (product) => {
    setEditingProduct(product)
  }

  const handleSave = (formData) => {
    const updatedProducts = editingProduct
      ? products.map(p => p.id === editingProduct.id ? formData : p)
      : [...products, formData]
    
    onSaveProducts(updatedProducts)
    setEditingProduct(null)
  }

  const handleDelete = (id) => {
    if (confirm('Remove this product?')) {
      onSaveProducts(products.filter(p => p.id !== id))
    }
  }

  const handleNewProduct = () => {
    setEditingProduct(null)
  }

  if (!isAdmin) {
    return (
      <section className="admin-panel show">
        <div className="admin-wrap">
          <AdminLogin onLogin={onLogin} />
        </div>
      </section>
    )
  }

  return (
    <section className="admin-panel show">
      <div className="admin-wrap">
        <div className="admin-top">
          <div>
            <span className="eyebrow">CONTROL ROOM</span>
            <h2 style={{ fontFamily: '"Playfair Display", serif', fontWeight: 600, fontSize: '36px', margin: '6px 0' }}>Product Manager</h2>
          </div>
          <div>
            <button className="btn soft" onClick={onBack}>← Store</button>
            <button className="btn dark" onClick={onLogout}>Logout</button>
          </div>
        </div>
        <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', marginBottom: '18px' }}>
          <button className="btn primary" onClick={handleNewProduct}>+ Add product</button>
          <button className="btn soft" onClick={onResetProducts}>Reset demo products</button>
        </div>

        {editingProduct !== null ? (
          <ProductForm
            product={editingProduct}
            categories={CATS}
            onSave={handleSave}
            onCancel={() => setEditingProduct(null)}
          />
        ) : (
          <AdminTable
            products={products}
            onEdit={handleEdit}
            onDelete={handleDelete}
          />
        )}
      </div>
    </section>
  )
}

export default AdminPanel
