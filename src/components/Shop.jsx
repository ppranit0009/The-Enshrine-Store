import CategoryFilter from './sections/CategoryFilter'
import CustomBanner from './sections/CustomBanner'
import ProductSection from './sections/ProductSection'
import AboutSection from './sections/AboutSection'

function Shop({ products, categories, selectedCategory, onCategoryChange, onCustomClick, onViewProduct }) {
  const cats = selectedCategory === 'all' ? categories : [selectedCategory]

  return (
    <section className="section compact" id="shop">
      <div className="section-head">
        <div>
          <span className="eyebrow">THE DROP</span>
          <h2>things you'll want.</h2>
        </div>
        <p>Not another boring gift shop. Discover playful objects somewhere between décor, technology and personality.</p>
      </div>
      <CategoryFilter
        categories={categories}
        selectedCategory={selectedCategory}
        onCategoryChange={onCategoryChange}
      />
      <CustomBanner onCustomClick={onCustomClick} />
      <div id="productSections">
        {cats.map(cat => (
          <ProductSection
            key={cat}
            category={cat}
            products={products}
            onCustomClick={onCustomClick}
            onViewProduct={onViewProduct}
          />
        ))}
      </div>
      <AboutSection />
    </section>
  )
}

export default Shop
