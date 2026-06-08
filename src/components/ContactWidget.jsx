import React, { useState } from 'react'
import '../styles/contact-widget.css'

function ContactWidget() {
  const [isOpen, setIsOpen] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Mensagem enviada:', formData)
    alert('Obrigado por entrar em contato! Responderemos em breve.')
    setFormData({ name: '', email: '', message: '' })
    setIsOpen(false)
  }

  return (
    <div className={`contact-widget ${isOpen ? 'open' : ''}`}>
      <button 
        className="widget-toggle"
        onClick={() => setIsOpen(!isOpen)}
        title={isOpen ? "Fechar" : "Abrir chat"}
      >
        {isOpen ? '×' : '💬'}
      </button>

      {isOpen && (
        <div className="widget-content">
          <div className="widget-header">
            <h3>Fale Conosco</h3>
            <p>Responderemos em até 2 horas</p>
          </div>

          <form onSubmit={handleSubmit} className="widget-form">
            <input
              type="text"
              name="name"
              placeholder="Seu Nome"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="seu@email.com"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <textarea
              name="message"
              placeholder="Como podemos ajudar?"
              value={formData.message}
              onChange={handleChange}
              required
              rows="3"
            ></textarea>
            <button type="submit" className="btn btn-primary btn-small">
              Enviar
            </button>
          </form>

          <div className="widget-contact-info">
            <p>📞 (11) 3000-0000</p>
            <p>📧 contato@motoeletrica.com</p>
          </div>
        </div>
      )}
    </div>
  )
}

export default ContactWidget
