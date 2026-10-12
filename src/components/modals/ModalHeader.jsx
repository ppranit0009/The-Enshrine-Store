function ModalHeader({ title, onClose, eyebrow = 'CUSTOM ORDER' }) {
  return (
    <div className="modal-head">
      <div>
        <span className="eyebrow">{eyebrow}</span>
        <h2 style={{ fontFamily: '"Playfair Display", serif', fontWeight: 600, fontSize: '30px', margin: '6px 0' }}>{title}</h2>
      </div>
      <button className="close" onClick={onClose}>×</button>
    </div>
  )
}

export default ModalHeader
