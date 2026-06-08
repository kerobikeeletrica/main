import React from 'react'
import '../styles/benefits.css'

const benefits = [
  { icon: '⚡', title: 'Energia Limpa', desc: 'Zero emissões. Carregue em casa como um celular.' },
  { icon: '💰', title: 'Economia Real', desc: 'Economize até 85% em combustível por mês.' },
  { icon: '🔧', title: 'Manutenção Mínima', desc: 'Sem óleo, sem velas. Custo quase zero para manter.' },
  { icon: '🏙️', title: 'Perfeito no Urbano', desc: 'Silencioso e ágil. Ideal para o trânsito da cidade.' },
  { icon: '🛡️', title: '1 Ano de Garantia', desc: 'Motor, controlador e estrutura cobertos por 12 meses.' },
  { icon: '🚀', title: 'Entrega em 24h', desc: 'Peça agora e receba amanhã no seu endereço.' },
]

function Benefits() {
  return (
    <section className="benefits">
      <div className="benefits-inner">
        <div className="benefits-header">
          <div>
            <span className="section-label">Por que Kerobike?</span>
            <h2 className="section-title">
              Vantagens que<br />
              <span className="muted">fazem diferença.</span>
            </h2>
          </div>
          <p className="benefits-header-sub">
            Tecnologia que transforma sua mobilidade diária.
          </p>
        </div>

        <div className="benefits-grid">
          {benefits.map((b, i) => (
            <div key={i} className="benefit-card">
              <div className="benefit-icon-wrap">{b.icon}</div>
              <h3 className="benefit-title">{b.title}</h3>
              <p className="benefit-desc">{b.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Benefits
