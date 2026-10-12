function SearchInput({ value, onChange, placeholder }) {
  return (
    <input
      value={value}
      onChange={(e) => onChange(e.target.value)}
      style={{
        width: '100%',
        border: '1px solid var(--line)',
        borderRadius: '14px',
        padding: '14px'
      }}
      placeholder={placeholder}
    />
  )
}

export default SearchInput
