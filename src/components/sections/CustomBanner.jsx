function CustomBanner({ onCustomClick }) {
  return (
    <div className="custom-banner" id="custom">
      <div>
        <h3>Your photo.<br />Your name.<br />Your thing.</h3>
        <p>Send us an idea and we'll turn it into an aesthetic object — 3D printed, lit up, animated or completely custom.</p>
      </div>
      <button className="btn primary" onClick={() => onCustomClick('General Customisation')}>Send the idea ✦</button>
    </div>
  )
}

export default CustomBanner
