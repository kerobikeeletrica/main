import React, { useState } from 'react'
import '../styles/faq.css'

const faqs = [
  {
    q: 'Preciso de CNH para andar?',
    a: 'Não. Os nossos modelos são equiparados a bicicletas elétricas pela legislação brasileira — você anda sem CNH, sem IPVA e sem licenciamento obrigatório.'
  },
  {
    q: 'Como funciona a entrega?',
    a: 'Simples assim: você fala com a gente pelo WhatsApp, escolhe sua moto e entregamos no mesmo dia ou em até 24 horas diretamente no seu endereço. Sem burocracia, sem frete escondido.'
  },
  {
    q: 'Posso pagar na entrega?',
    a: 'Pode sim — e fazemos questão disso. Aceitamos Pix (com 5% de desconto à vista), cartão em até 18x e dinheiro na hora da entrega. Você só paga quando a moto estiver na sua mão.'
  },
  {
    q: 'Qual é a garantia?',
    a: 'Toda Kerobike tem 1 ano completo de garantia contra defeitos de fábrica, cobrindo motor, controlador e estrutura. Se algo acontecer, a gente busca, conserta e devolve sem complicação.'
  },
  {
    q: 'Posso fazer um test ride antes?',
    a: 'Pode sim! Levamos a moto até você para um test ride sem compromisso. Você anda, sente a aceleração, testa o freio e a posição de pilotagem. Só depois de aprovar é que fechamos a venda.'
  },
]

function FAQ() {
  const [open, setOpen] = useState(0)

  const toggle = (i) => setOpen(open === i ? null : i)

  return (
    <section className="faq" id="faq">
      <div className="faq-inner">
        <div className="faq-header">
          <span className="section-label">Tira-dúvidas</span>
          <h2 className="section-title">
            Tudo o que você<br />
            <span className="muted">precisa saber.</span>
          </h2>
        </div>

        <div className="faq-list">
          {faqs.map((item, i) => (
            <div key={i} className="faq-item">
              <button
                className="faq-question"
                onClick={() => toggle(i)}
                aria-expanded={open === i}
              >
                <span className={`faq-q-text ${open === i ? 'open' : ''}`}>{item.q}</span>
                <span className={`faq-icon ${open === i ? 'open' : ''}`}>+</span>
              </button>
              <div className={`faq-answer ${open === i ? 'open' : ''}`}>
                <p>{item.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FAQ
