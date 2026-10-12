function SaleSection() {
  return (
    <section className="sale-section">
      <div className="sale-content">
        <div className="sale-badge">SALE</div>
        <div className="sale-date">Oct 2026</div>
        <h2 className="sale-title">Festive Season Sale</h2>
        <p className="sale-description">
          Get 20% off on all custom orders this festive season. Use code FIZZ20 at checkout. Limited time offer!
        </p>
        <button className="btn primary sale-button">Learn More →</button>
      </div>
      <div className="sale-image">
        <img src="/assets/mascot-gift.png" alt="Festive Season Sale" />
      </div>
    </section>
  )
}

export default SaleSection
