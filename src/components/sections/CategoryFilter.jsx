function CategoryFilter({ categories, selectedCategory, onCategoryChange }) {
  return (
    <div className="cat-strip">
      <button
        className={`cat-chip ${selectedCategory === 'all' ? 'active' : ''}`}
        onClick={() => onCategoryChange('all')}
      >
        All
      </button>
      {categories.map(cat => (
        <button
          key={cat}
          className={`cat-chip ${selectedCategory === cat ? 'active' : ''}`}
          onClick={() => onCategoryChange(cat)}
        >
          {cat}
        </button>
      ))}
    </div>
  )
}

export default CategoryFilter
