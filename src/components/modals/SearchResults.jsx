function SearchResults({ products, query, onViewProduct }) {
  if (!query) {
    return (
      <p style={{ color: 'var(--muted)', fontSize: '13px' }}>
        Try "lamp", "OLED", "keychain", "desk" or "frame".
      </p>
    )
  }

  if (!products.length) {
    return (
      <p style={{ color: 'var(--muted)', fontSize: '13px' }}>
        No products found.
      </p>
    )
  }

  return (
    <>
      {products.map(p => (
        <div
          key={p.id}
          style={{
            display: 'flex',
            gap: '12px',
            padding: '10px 0',
            borderBottom: '1px solid var(--line)',
            alignItems: 'center'
          }}
        >
          <img
            src={p.img}
            alt={p.name}
            style={{ width: '58px', height: '58px', objectFit: 'cover', borderRadius: '10px' }}
          />
          <div>
            <b>{p.name}</b>
            <div style={{ fontSize: '11px', color: 'var(--muted)' }}>{p.cat} • {p.price}</div>
          </div>
          <button
            className="smallbtn"
            style={{ marginLeft: 'auto' }}
            onClick={() => onViewProduct(p.id)}
          >
            View
          </button>
        </div>
      ))}
    </>
  )
}

export default SearchResults
