import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/navbar.css'

function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false)
  const [cartCount, setCartCount] = React.useState(0)

  React.useEffect(() => {
    const cart = JSON.parse(localStorage.getItem('cart') || '[]')
    setCartCount(cart.length)
  }, [])

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          MOTO<span>E</span>
        </Link>
        
        <div className={`nav-menu ${isOpen ? 'active' : ''}`}>
          <a href="#modelos" className="nav-link" onClick={() => setIsOpen(false)}>
            Modelos
          </a>
          <a href="#economia" className="nav-link" onClick={() => setIsOpen(false)}>
            Economia
          </a>
          <a href="#entregas" className="nav-link" onClick={() => setIsOpen(false)}>
            Entregas
          </a>
          <a href="#suporte" className="nav-link" onClick={() => setIsOpen(false)}>
            Suporte
          </a>
          <Link to="/checkout" className="nav-link cta-button" onClick={() => setIsOpen(false)}>
            🛒 Carrinho {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
          </Link>
        </div>

        <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
