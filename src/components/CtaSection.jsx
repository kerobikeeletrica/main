import React from 'react'
import './CtaSection.css'

function CtaSection() {
  return (
    <section className="cta-section">
      <div className="cta-wrapper">
        <div className="cta-glow-tr" />
        <div className="cta-glow-bl" />

        <div className="cta-inner">
          <span className="cta-eyebrow">Próxima entrega: amanhã</span>
          <h2 className="cta-title">
            Sua Kerobike<br />
            <em>te espera.</em>
          </h2>
          <p className="cta-subtitle">
            Escolha o modelo. Pague na entrega. Receba em até 24h no seu endereço.
          </p>
          <div className="cta-buttons">
            <a href="#modelos" className="cta-btn-dark">Escolher minha Moto</a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CtaSection
