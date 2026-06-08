import React from 'react'
import '../styles/delivery-info.css'

function DeliveryInfo() {
  const steps = [
    {
      number: '1',
      title: 'Escolha seu Modelo',
      description: 'Navegue por nossa seleção de motos elétricas premium'
    },
    {
      number: '2',
      title: 'Faça o Pedido',
      description: 'Seu pedido é confirmado em minutos'
    },
    {
      number: '3',
      title: 'Preparamos sua Moto',
      description: 'Nossa equipe prepara e testa completamente'
    },
    {
      number: '4',
      title: 'Entregamos em 24h',
      description: 'Receba no seu endereço pronto para usar'
    }
  ]

  return (
    <section className="delivery-info" id="entregas">
      <div className="delivery-container">
        <div className="delivery-header">
          <h2>Processo de Entrega</h2>
          <p>Simples, rápido e confiável</p>
        </div>

        <div className="delivery-steps">
          {steps.map((step, index) => (
            <div key={index} className="delivery-step">
              <div className="step-number">{step.number}</div>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
              {index < steps.length - 1 && <div className="step-connector"></div>}
            </div>
          ))}
        </div>

        <div className="delivery-info-box">
          <div className="info-item">
            <span className="info-icon">📦</span>
            <div>
              <h4>Entrega Grátis</h4>
              <p>Para pedidos na região metropolitana</p>
            </div>
          </div>
          <div className="info-item">
            <span className="info-icon">💳</span>
            <div>
              <h4>Pague na Entrega</h4>
              <p>PIX, cartão ou boleto bancário</p>
            </div>
          </div>
          <div className="info-item">
            <span className="info-icon">🛡️</span>
            <div>
              <h4>Garantia</h4>
              <p>Cobertura completa por 12 meses</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default DeliveryInfo
