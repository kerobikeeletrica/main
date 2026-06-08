import React from 'react'
import '../styles/testimonials.css'

function Testimonials() {
  const testimonials = [
    {
      name: 'João Silva',
      role: 'Entregador - São Paulo',
      text: 'Economia real! Gasto no máximo 20 reais com eletricidade todo mês. Moto confiável e muito silenciosa.',
      rating: 5
    },
    {
      name: 'Maria Santos',
      role: 'Estudante - Rio de Janeiro',
      text: 'Super fácil de usar, não precisa de CNH e a entrega foi rápida. Recomendo para todo mundo!',
      rating: 5
    },
    {
      name: 'Carlos Mendes',
      role: 'Profissional Autônomo - Belo Horizonte',
      text: 'Melhor investimento que fiz! Durável, silenciosa e a manutenção é praticamente nula.',
      rating: 5
    },
    {
      name: 'Ana Costa',
      role: 'Auxiliar Administrativo - São Paulo',
      text: 'Amei! Chegou em 24h, a bateria dura bastante e o suporte foi muito atencioso.',
      rating: 5
    }
  ]

  return (
    <section className="testimonials">
      <div className="testimonials-container">
        <div className="section-header">
          <h2>O que Nossos Clientes Dizem</h2>
          <p>Confira as experiências reais de quem já escolheu MOTO ELÉTRICA</p>
        </div>

        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-card">
              <div className="rating">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i}>★</span>
                ))}
              </div>
              <p className="testimonial-text">"{testimonial.text}"</p>
              <div className="testimonial-author">
                <strong>{testimonial.name}</strong>
                <span>{testimonial.role}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
