import React from 'react'
import '../styles/benefits.css'

function Benefits() {
  const benefits = [
    {
      icon: '⚡',
      title: 'Energia Limpa',
      description: 'Zero emissões de carbono. Carregue em casa ou em qualquer lugar com tomada.'
    },
    {
      icon: '💰',
      title: 'Economia Garantida',
      description: 'Economize até 80% em combustível comparado com motos a gasolina.'
    },
    {
      icon: '🔧',
      title: 'Manutenção Mínima',
      description: 'Sem óleo, sem velas, sem corrente. Custo de manutenção praticamente zero.'
    },
    {
      icon: '🏙️',
      title: 'Urbano',
      description: 'Perfeito para deslocamento na cidade. Silencioso e ágil no trânsito.'
    },
    {
      icon: '⚙️',
      title: 'Durável',
      description: 'Tecnologia de ponta com bateria de lítio de 5+ anos de vida útil.'
    },
    {
      icon: '🛡️',
      title: 'Seguro',
      description: 'Garantia de 12 meses + 7 dias de devolução sem perguntas.'
    }
  ]

  return (
    <section className="benefits">
      <div className="benefits-container">
        <div className="section-header">
          <h2>Por que Escolher MOTO ELÉTRICA?</h2>
          <p>Benefícios que transformam sua mobilidade</p>
        </div>

        <div className="benefits-grid">
          {benefits.map((benefit, index) => (
            <div key={index} className="benefit-card">
              <div className="benefit-icon">{benefit.icon}</div>
              <h3>{benefit.title}</h3>
              <p>{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Benefits
