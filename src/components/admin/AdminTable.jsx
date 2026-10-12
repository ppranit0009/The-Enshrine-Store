function AdminTable({ products, onEdit, onDelete }) {
  return (
    <div style={{ overflow: 'auto' }}>
      <table className="admin-table">
        <thead>
          <tr>
            <th>Image</th>
            <th>Product</th>
            <th>Category</th>
            <th>Price</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map(p => (
            <tr key={p.id}>
              <td><img src={p.img} alt={p.name} /></td>
              <td>
                <b>{p.name}</b>
                <br />
                <span style={{ color: 'var(--muted)' }}>{p.sub}</span>
              </td>
              <td>{p.cat}</td>
              <td>{p.price}</td>
              <td>
                <button className="smallbtn" onClick={() => onEdit(p)}>Edit</button>
                <button className="smallbtn" onClick={() => onDelete(p.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default AdminTable
