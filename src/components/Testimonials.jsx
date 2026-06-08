import React from 'react'
import '../styles/testimonials.css'

const testimonials = [
  {
    text: '"Vou do trabalho pra casa sem gastar um real de gasolina. Melhor decisão que tomei."',
    name: 'Rodrigo M.',
    role: 'São Paulo'
  },
  {
    text: '"Recebi em 18 horas. A moto chama atenção em qualquer cruzamento."',
    name: 'Camila S.',
    role: 'Rio de Janeiro'
  },
  {
    text: '"Trabalho com delivery. Em 3 meses já paguei metade só com a economia."',
    name: 'Luiz F.',
    role: 'Belo Horizonte'
  },
]

function Testimonials() {
  return (
    <section className="testimonials" id="entregas">
      <div className="testimonials-inner">
        <div className="testimonials-header">
          <span className="section-label">Presença real</span>
          <h2 className="section-title">
            De norte a sul.<br />
            <span className="muted">Operação 100% nacional.</span>
          </h2>
        </div>

        {/* Stats */}
        <div className="testimonials-stats">
          <div className="stat-card">
            <span className="stat-card-label">Avaliação média</span>
            <span className="stat-card-value">4.9</span>
            <p className="stat-card-sub">Baseado em 500+ clientes verificados.</p>
          </div>
          <div className="stat-card">
            <span className="stat-card-label">Entregas realizadas</span>
            <span className="stat-card-value">2.5k+</span>
            <p className="stat-card-sub">Em todo o Brasil.</p>
          </div>
          <div className="stat-card" style={{ gridColumn: 'span 2' }}>
            <span className="stat-card-label">Economia gerada</span>
            <span className="stat-card-value">R$1M+</span>
            <p className="stat-card-sub">Economizados pelos nossos clientes em combustível.</p>
          </div>
        </div>

        {/* Testimonials */}
        <div className="testimonials-grid">
          {testimonials.map((t, i) => (
            <blockquote key={i} className="testimonial-card">
              <p className="testimonial-text">{t.text}</p>
              <footer className="testimonial-author">
                <div className="testimonial-avatar" />
                <div>
                  <span className="testimonial-name">{t.name}</span>
                  <span className="testimonial-role">{t.role}</span>
                </div>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
