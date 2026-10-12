import { useState, forwardRef } from 'react'

const CustomForm = forwardRef(({ initialProduct, onSubmit }, ref) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    product: initialProduct || '',
    details: ''
  })

  const handleChange = (field, value) => {
    setFormData({ ...formData, [field]: value })
  }

  return (
    <form ref={ref} className="form-grid" onSubmit={(e) => { e.preventDefault(); onSubmit(formData) }}>
      <div className="field">
        <label>Your name</label>
        <input
          value={formData.name}
          onChange={(e) => handleChange('name', e.target.value)}
          placeholder="Your name"
        />
      </div>
      <div className="field">
        <label>Phone / WhatsApp</label>
        <input
          value={formData.phone}
          onChange={(e) => handleChange('phone', e.target.value)}
          placeholder="+91 ..."
        />
      </div>
      <div className="field full">
        <label>What would you like?</label>
        <input
          value={formData.product}
          onChange={(e) => handleChange('product', e.target.value)}
          placeholder="e.g. personalised moon lamp"
        />
      </div>
      <div className="field full">
        <label>Details</label>
        <textarea
          value={formData.details}
          onChange={(e) => handleChange('details', e.target.value)}
          placeholder="Photo, name, quote, colour, size, reference idea..."
        />
      </div>
    </form>
  )
})

CustomForm.displayName = 'CustomForm'

export default CustomForm
