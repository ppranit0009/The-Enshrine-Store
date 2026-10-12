import { useState, useEffect } from 'react'
import Header from './components/Header'
import UpdatesSection from './components/sections/UpdatesSection'
import Shop from './components/Shop'
import ReviewsSection from './components/sections/ReviewsSection'
import Footer from './components/Footer'
import CustomModal from './components/CustomModal'
import ProductModal from './components/ProductModal'
import SearchModal from './components/SearchModal'
import AdminPanel from './components/AdminPanel'
import { DEMO_PRODUCTS, CATS, THEME_DATA, UPDATES, REVIEWS } from './data'

function App() {
  const [products, setProducts] = useState(DEMO_PRODUCTS)
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [currentTheme, setCurrentTheme] = useState('female')
  const [showCustomModal, setShowCustomModal] = useState(false)
  const [showProductModal, setShowProductModal] = useState(false)
  const [showSearchModal, setShowSearchModal] = useState(false)
  const [showAdmin, setShowAdmin] = useState(false)
  const [selectedProduct, setSelectedProduct] = useState(null)
  const [customTitle, setCustomTitle] = useState('Make it yours')
  const [searchQuery, setSearchQuery] = useState('')
  const [toast, setToast] = useState('')
  const [isAdmin, setIsAdmin] = useState(false)

  useEffect(() => {
    const savedProducts = localStorage.getItem('fizzProducts')
    if (savedProducts) {
      setProducts(JSON.parse(savedProducts))
    }
    const adminSession = sessionStorage.getItem('fizzAdmin')
    if (adminSession === '1') {
      setIsAdmin(true)
    }
  }, [])

  const saveProducts = (newProducts) => {
    setProducts(newProducts)
    localStorage.setItem('fizzProducts', JSON.stringify(newProducts))
  }

  const toggleTheme = () => {
    setCurrentTheme(prev => prev === 'female' ? 'male' : 'female')
  }

  const openCustom = (title) => {
    setCustomTitle(title === 'General Customisation' ? 'Make it yours' : title)
    setShowCustomModal(true)
  }

  const viewProduct = (id) => {
    const product = products.find(p => p.id === id)
    if (product) {
      setSelectedProduct(product)
      setShowProductModal(true)
    }
  }

  const productToCustom = () => {
    setShowProductModal(false)
    openCustom(selectedProduct?.name || 'Product enquiry')
  }

  const showToast = (message) => {
    setToast(message)
    setTimeout(() => setToast(''), 2600)
  }

  const handleLogin = (email, password) => {
    if (email === 'admin@gmail.com' && password === '123admin') {
      setIsAdmin(true)
      sessionStorage.setItem('fizzAdmin', '1')
      showToast('Logged in successfully')
    } else {
      showToast('Incorrect admin credentials')
    }
  }

  const handleLogout = () => {
    setIsAdmin(false)
    sessionStorage.removeItem('fizzAdmin')
    setShowAdmin(false)
    showToast('Logged out')
  }

  const themeData = THEME_DATA[currentTheme]

  return (
    <>
      <Header
        themeData={themeData}
        currentTheme={currentTheme}
        toggleTheme={toggleTheme}
        onSearchClick={() => setShowSearchModal(true)}
        onAdminClick={() => setShowAdmin(true)}
      />
      
      {!showAdmin ? (
        <main id="store">
          <UpdatesSection updates={UPDATES} />
          <Shop
            products={products}
            categories={CATS}
            selectedCategory={selectedCategory}
            onCategoryChange={setSelectedCategory}
            onCustomClick={openCustom}
            onViewProduct={viewProduct}
          />
          <ReviewsSection reviews={REVIEWS} />
        </main>
      ) : (
        <AdminPanel
          products={products}
          isAdmin={isAdmin}
          onLogin={handleLogin}
          onLogout={handleLogout}
          onBack={() => setShowAdmin(false)}
          onSaveProducts={saveProducts}
          onResetProducts={() => {
            saveProducts(DEMO_PRODUCTS)
            showToast('Demo catalog restored')
          }}
          onViewProduct={viewProduct}
        />
      )}

      <Footer />
      
      {showCustomModal && (
        <CustomModal
          title={customTitle}
          onClose={() => setShowCustomModal(false)}
          onSubmit={(data) => {
            const msg = `Hello FIZZ!%0A%0AI want to enquire about: ${encodeURIComponent(data.product || 'a custom product')}%0AName: ${encodeURIComponent(data.name || 'Not provided')}%0APhone: ${encodeURIComponent(data.phone || 'Not provided')}%0ADetails: ${encodeURIComponent(data.details || 'Not provided')}`
            window.open(`https://wa.me/919999999999?text=${msg}`, '_blank')
            showToast('Opening WhatsApp with your enquiry…')
            setShowCustomModal(false)
          }}
        />
      )}

      {showProductModal && selectedProduct && (
        <ProductModal
          product={selectedProduct}
          onClose={() => setShowProductModal(false)}
          onCustomize={productToCustom}
        />
      )}

      {showSearchModal && (
        <SearchModal
          products={products}
          query={searchQuery}
          onQueryChange={setSearchQuery}
          onClose={() => setShowSearchModal(false)}
          onViewProduct={(id) => {
            setShowSearchModal(false)
            viewProduct(id)
          }}
        />
      )}

      {toast && <div id="toast" style={{ display: 'block' }}>{toast}</div>}
    </>
  )
}

export default App
