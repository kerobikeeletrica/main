import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/hero.css'

function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero-content">
        <span className="hero-badge">
          ✓ Operação em São Paulo • Rio de Janeiro • Belo Horizonte
        </span>
        
        <h1 className="hero-title">
          <span className="highlight">MOBILIDADE</span>
          <span className="break-line">ELÉTRICA PREMIUM</span>
        </h1>

        <p className="hero-description">
          Motos elétricas de alta performance sem burocracia. Sem CNH, sem IPVA, sem barulho. 
          Receba sua moto hoje mesmo no seu endereço.
        </p>

        <div className="hero-stats">
          <div className="stat">
            <strong>500+</strong>
            <span>Clientes Satisfeitos</span>
          </div>
          <div className="stat">
            <strong>24h</strong>
            <span>Entrega Garantida</span>
          </div>
          <div className="stat">
            <strong>80%</strong>
            <span>Economia Mensal</span>
          </div>
        </div>

        <div className="hero-cta">
          <a href="#modelos" className="btn btn-primary">
            Escolher minha Moto
          </a>
          <a href="#economia" className="btn btn-secondary">
            Calcular Economia
          </a>
        </div>

        <div className="hero-benefits">
          <div className="benefit">
            <span className="benefit-icon">✓</span>
            <p>Sem CNH</p>
          </div>
          <div className="benefit">
            <span className="benefit-icon">✓</span>
            <p>Entrega em 24h</p>
          </div>
          <div className="benefit">
            <span className="benefit-icon">✓</span>
            <p>Pague na Entrega</p>
          </div>
        </div>
      </div>

      <div className="hero-image">
        <div className="placeholder-image">
          <p>🏍️</p>
          <span>Moto Elétrica Premium</span>
        </div>
      </div>
    </section>
  )
}

export default Hero
