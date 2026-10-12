function HeroContent({ themeData, onCustomClick }) {
  return (
    <div>
      <span className="eyebrow">{themeData.eyebrow}</span>
      <h1 dangerouslySetInnerHTML={{ __html: themeData.title }} />
      <p>{themeData.text}</p>
      <div className="cta">
        <a className="btn primary" href="#shop">{themeData.button}</a>
        <button className="btn soft" onClick={onCustomClick}>Make it yours</button>
      </div>
    </div>
  )
}

export default HeroContent
