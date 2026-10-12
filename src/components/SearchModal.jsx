import ModalHeader from './modals/ModalHeader'
import SearchInput from './modals/SearchInput'
import SearchResults from './modals/SearchResults'

function SearchModal({ products, query, onQueryChange, onClose, onViewProduct }) {
  const filteredProducts = query
    ? products.filter(p =>
        (p.name + ' ' + p.cat + ' ' + p.sub + ' ' + p.desc).toLowerCase().includes(query.toLowerCase())
      ).slice(0, 12)
    : []

  return (
    <div className="modal show">
      <div className="modal-box">
        <ModalHeader title="Find something." onClose={onClose} eyebrow="SEARCH" />
        <SearchInput
          value={query}
          onChange={onQueryChange}
          placeholder="Search lamps, keychains, OLED..."
        />
        <div style={{ marginTop: '14px' }}>
          <SearchResults
            products={filteredProducts}
            query={query}
            onViewProduct={onViewProduct}
          />
        </div>
      </div>
    </div>
  )
}

export default SearchModal
