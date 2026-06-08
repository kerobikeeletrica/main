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
            Concessionária de motocicletas e veículos elétricos.
            Loja física, pronta entrega e parcelamento em até 48x.
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
            <li><a href="https://bit.ly/2hRFHnW" target="_blank" rel="noopener noreferrer">WhatsApp</a></li>
            <li><a href="https://www.instagram.com/kero_bikee/" target="_blank" rel="noopener noreferrer">Instagram</a></li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2025 Kero Bike Veículos Elétricos</p>
        <p>Pronta Entrega • Loja Física</p>
      </div>
    </footer>
  )
}

export default Footer
