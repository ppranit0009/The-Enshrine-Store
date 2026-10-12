import { useState } from 'react'

function AdminLogin({ onLogin }) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = () => {
    onLogin(email, password)
  }

  return (
    <div className="admin-login">
      <span className="eyebrow">PRIVATE AREA</span>
      <h2 style={{ fontFamily: '"Playfair Display", serif', fontWeight: 600, fontSize: '36px' }}>Store Admin</h2>
      <p style={{ color: 'var(--muted)', fontSize: '13px' }}>Add, edit or remove products from this browser.</p>
      <div className="field" style={{ marginTop: '16px' }}>
        <label>Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="admin@gmail.com"
        />
      </div>
      <div className="field" style={{ marginTop: '12px' }}>
        <label>Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="••••••••"
        />
      </div>
      <button
        className="btn primary"
        style={{ width: '100%', marginTop: '16px' }}
        onClick={handleSubmit}
      >
        Login
      </button>
      <p style={{ fontSize: '11px', color: '#9b91a4', marginTop: '12px' }}>
        Demo credentials are stored in the front-end. For production, replace with secure server-side authentication.
      </p>
    </div>
  )
}

export default AdminLogin
