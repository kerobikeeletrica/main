import React, { useState } from 'react'
import '../styles/faq.css'

function FAQ() {
  const [openIndex, setOpenIndex] = useState(null)

  const faqs = [
    {
      question: 'Preciso de CNH para andar de moto elétrica?',
      answer: 'Não! Motos elétricas com potência de até 1000W e velocidade máxima de 32 km/h não requerem CNH. Você pode usar desde os 16 anos.'
    },
    {
      question: 'Qual é a autonomia real das motos?',
      answer: 'A autonomia varia de 40 a 60 km dependendo do modelo, condições de uso e terreno. Em uso urbano normal, você consegue fazer vários dias de uso com uma carga.'
    },
    {
      question: 'Quanto tempo leva para carregar?',
      answer: 'Depende do modelo: de 4 a 8 horas. Você pode carregar em casa, no trabalho ou qualquer lugar com tomada. A bateria é removível.'
    },
    {
      question: 'Vocês entregam em minha cidade?',
      answer: 'Entregamos em São Paulo, Rio de Janeiro e Belo Horizonte. Em breve expandiremos para outras cidades. Acompanhe nossas redes sociais!'
    },
    {
      question: 'Qual é o custo de manutenção?',
      answer: 'Muito baixo! Sem óleo, sem velas, sem correia. A manutenção se resume a limpeza, pneus e freios. Custo médio de R$ 30-50/mês.'
    },
    {
      question: 'As motos são impermeáveis?',
      answer: 'Sim! Todas as nossas motos têm proteção contra água e poeira (IP65). Você pode usar na chuva sem problemas. Basta cuidado normal.'
    },
    {
      question: 'Posso devolver se não gostar?',
      answer: '7 dias de garantia de devolução sem perguntas! Se não se sentir satisfeito, fazemos a devolução completa.'
    },
    {
      question: 'Tem seguro?',
      answer: 'Nós oferecemos opções de seguro mensal a partir de R$ 40. Cobertura contra roubo, furto e danos.'
    }
  ]

  return (
    <section className="faq" id="suporte">
      <div className="faq-container">
        <div className="faq-header">
          <h2>Perguntas Frequentes</h2>
          <p>Tire suas dúvidas sobre nossas motos elétricas</p>
        </div>

        <div className="faq-list">
          {faqs.map((faq, index) => (
            <div key={index} className={`faq-item ${openIndex === index ? 'open' : ''}`}>
              <button
                className="faq-question"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span>{faq.question}</span>
                <span className="faq-icon">{openIndex === index ? '−' : '+'}</span>
              </button>
              {openIndex === index && (
                <div className="faq-answer">
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FAQ
