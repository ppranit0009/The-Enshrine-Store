import FooterLogo from './sections/FooterLogo'
import FooterLinks from './sections/FooterLinks'
import FooterCopyright from './sections/FooterCopyright'

function Footer() {
  return (
    <footer id="contact">
      <div className="foot">
        <FooterLogo />
        <FooterLinks />
      </div>
      <FooterCopyright />
    </footer>
  )
}

export default Footer
