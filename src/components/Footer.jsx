import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/footer.css'

function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>MOTO<span>E</span></h3>
          <p>Mobilidade elétrica premium para todos.</p>
          <div className="social-links">
            <a href="#instagram">Instagram</a>
            <a href="#facebook">Facebook</a>
            <a href="#tiktok">TikTok</a>
          </div>
        </div>

        <div className="footer-section">
          <h4>Produtos</h4>
          <ul>
            <li><a href="#modelos">Ver Modelos</a></li>
            <li><a href="#acessorios">Acessórios</a></li>
            <li><a href="#comparar">Comparar Modelos</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Empresa</h4>
          <ul>
            <li><a href="#sobre">Sobre Nós</a></li>
            <li><a href="#blog">Blog</a></li>
            <li><a href="#carreiras">Carreiras</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Suporte</h4>
          <ul>
            <li><a href="#faq">FAQ</a></li>
            <li><a href="#contato">Contato</a></li>
            <li><a href="#privacidade">Privacidade</a></li>
            <li><a href="#termos">Termos de Serviço</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Contato</h4>
          <p>
            📧 contato@motoeletrica.com<br/>
            📞 (11) 3000-0000<br/>
            📍 São Paulo, SP
          </p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {currentYear} MOTO Elétrica. Todos os direitos reservados.</p>
      </div>
    </footer>
  )
}

export default Footer
