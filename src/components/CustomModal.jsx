import { useRef } from 'react'
import CustomForm from './modals/CustomForm'
import ModalHeader from './modals/ModalHeader'

function CustomModal({ title, onClose, onSubmit }) {
  const formRef = useRef(null)
  const initialProduct = title === 'Make it yours' ? '' : title

  const handleSubmit = (formData) => {
    onSubmit(formData)
  }

  const handleButtonClick = () => {
    if (formRef.current) {
      formRef.current.dispatchEvent(new Event('submit', { cancelable: true, bubbles: true }))
    }
  }

  return (
    <div className="modal show">
      <div className="modal-box">
        <ModalHeader title={title} onClose={onClose} />
        <p style={{ color: 'var(--muted)', fontSize: '13px' }}>Share the idea. You don't need to create an account.</p>
        <CustomForm ref={formRef} initialProduct={initialProduct} onSubmit={handleSubmit} />
        <button
          className="btn primary"
          style={{ width: '100%', marginTop: '16px' }}
          onClick={handleButtonClick}
        >
          Send to FIZZ team →
        </button>
      </div>
    </div>
  )
}

export default CustomModal
