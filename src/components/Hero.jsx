import React from 'react'
import '../styles/hero.css'

function Hero() {
  return (
    <section className="hero" id="top">
      {/* Background */}
      <div className="hero-bg">
        <img 
          src="https://movamotos.com/__l5e/assets-v1/2b2dda01-5b4a-4852-bb94-a79d94245ce5/mova-store.png" 
          alt="Loja MOVA - Mobilidade Elétrica" 
          className="hero-bg-image" 
        />
        <div className="hero-bg-gradient" />
      </div>
      <div className="hero-glow" />

      {/* Content */}
      <div className="hero-content">
        <div className="hero-eyebrow">
          <span className="hero-dot" />
          <span className="hero-eyebrow-text">Concessionária de Veículos Elétricos</span>
        </div>

        <h1 className="hero-title">
          A CIDADE É<br />
          <span className="hero-title-brand">ELÉTRICA.</span>
        </h1>

        <div className="hero-bottom">
          <p className="hero-description">
            Kero Bike Veículos Elétricos. Loja física, pronta entrega e parcelamento em até 48x. Diga Adeus à Habilitação!
            Escolha sua moto e receba hoje mesmo.
          </p>

          <div className="hero-cta">
            <a href="#modelos" className="btn btn-primary btn-large">
              Escolher minha Moto
            </a>
            <a href="#economia" className="btn btn-secondary btn-large">
              Calcular economia
            </a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="hero-bottom-bar">
        <span>Sem CNH</span>
        <span className="hero-bottom-bar-dot" />
        <span>Pronta Entrega</span>
        <span className="hero-bottom-bar-dot" />
        <span>Até 48x</span>
      </div>
    </section>
  )
}

export default Hero
