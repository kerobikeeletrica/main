import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/navbar.css'

function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false)

  return (
    <>
      <nav className="navbar">
        <Link to="/" className="navbar-logo">
          KERO BIKE<span>.</span>
        </Link>

        <div className="nav-links">
          <a href="#modelos" className="nav-link">Modelos</a>
          <a href="#economia" className="nav-link">Economia</a>
          <a href="#entregas" className="nav-link">Entregas</a>
          <a href="#faq" className="nav-link">Suporte</a>
          <span className="nav-indicator" />
        </div>

        <div className="hamburger" onClick={() => setIsOpen(!isOpen)} aria-label="Menu">
          <span style={{ transform: isOpen ? 'rotate(45deg) translate(5px,5px)' : 'none' }} />
          <span style={{ opacity: isOpen ? 0 : 1 }} />
          <span style={{ transform: isOpen ? 'rotate(-45deg) translate(5px,-5px)' : 'none' }} />
        </div>
      </nav>

      <div className={`mobile-menu ${isOpen ? 'open' : ''}`}>
        <a href="#modelos" className="nav-link" onClick={() => setIsOpen(false)}>Modelos</a>
        <a href="#economia" className="nav-link" onClick={() => setIsOpen(false)}>Economia</a>
        <a href="#entregas" className="nav-link" onClick={() => setIsOpen(false)}>Entregas</a>
        <a href="#faq" className="nav-link" onClick={() => setIsOpen(false)}>Suporte</a>
      </div>
    </>
  )
}

export default Navbar
