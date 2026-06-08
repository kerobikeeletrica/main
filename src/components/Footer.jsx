import React from 'react'
import '../styles/footer.css'

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-grid">
        {/* Brand */}
        <div>
          <span className="footer-brand-logo">KERO<span>.</span></span>
          <p className="footer-brand-desc">
            A revolução da mobilidade elétrica no Brasil. Design funcional,
            tecnologia de ponta e zero burocracia.
          </p>
        </div>

        {/* Nav */}
        <div>
          <span className="footer-col-title">Navegação</span>
          <ul className="footer-links">
            <li><a href="#modelos">Modelos</a></li>
            <li><a href="#economia">Economia</a></li>
            <li><a href="#entregas">Entregas</a></li>
            <li><a href="#faq">Suporte</a></li>
          </ul>
        </div>

        {/* Social */}
        <div>
          <span className="footer-col-title">Social</span>
          <ul className="footer-links">
            <li><a href="https://wa.me/5511999999999" target="_blank" rel="noopener noreferrer">WhatsApp</a></li>
            <li><a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a></li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2025 Kerobike Mobilidade Elétrica</p>
        <p>Feito com ❤️ no Brasil</p>
      </div>
    </footer>
  )
}

export default Footer
