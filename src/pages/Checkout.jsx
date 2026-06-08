import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import '../styles/checkout.css'

function Checkout() {
  const navigate = useNavigate()
  const [cartItems, setCartItems] = useState([])
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    zipcode: ''
  })
  const [step, setStep] = useState('cart')

  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem('cart') || '[]')
    setCartItems(cart)
  }, [])

  const handleRemoveItem = (cartId) => {
    const updated = cartItems.filter(item => item.cartId !== cartId)
    setCartItems(updated)
    localStorage.setItem('cart', JSON.stringify(updated))
  }

  const handleFormChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmitOrder = (e) => {
    e.preventDefault()
    // Aqui você integraria com Supabase para salvar o pedido
    console.log('Pedido:', { ...formData, items: cartItems })
    setStep('success')
    localStorage.removeItem('cart')
    setTimeout(() => navigate('/'), 3000)
  }

  const total = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0)

  if (step === 'success') {
    return (
      <div className="checkout-page">
        <div className="success-message">
          <h2>✓ Pedido Realizado com Sucesso!</h2>
          <p>Você será redirecionado para a página inicial em breve...</p>
        </div>
      </div>
    )
  }

  if (cartItems.length === 0 && step === 'cart') {
    return (
      <div className="checkout-page">
        <div className="empty-cart">
          <h2>Seu Carrinho Está Vazio</h2>
          <p>Escolha um modelo de moto para começar</p>
          <button className="btn btn-primary" onClick={() => navigate('/')}>
            Voltar para Modelos
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="checkout-page">
      <div className="checkout-container">
        <div className="checkout-steps">
          <div className={`step ${step === 'cart' ? 'active' : 'completed'}`}>
            <span>1</span> Carrinho
          </div>
          <div className={`step ${step === 'shipping' ? 'active' : step === 'payment' ? 'completed' : ''}`}>
            <span>2</span> Entrega
          </div>
          <div className={`step ${step === 'payment' ? 'active' : ''}`}>
            <span>3</span> Pagamento
          </div>
        </div>

        {step === 'cart' && (
          <div className="cart-section">
            <h2>Seu Carrinho</h2>
            <div className="cart-items">
              {cartItems.map(item => (
                <div key={item.cartId} className="cart-item">
                  <div className="item-info">
                    <h3>{item.name}</h3>
                    <p>Quantidade: {item.quantity}</p>
                  </div>
                  <div className="item-price">
                    R$ {(item.price * item.quantity).toLocaleString('pt-BR')}
                  </div>
                  <button 
                    className="btn-remove"
                    onClick={() => handleRemoveItem(item.cartId)}
                  >
                    Remover
                  </button>
                </div>
              ))}
            </div>
            <div className="cart-summary">
              <h3>Total: R$ {total.toLocaleString('pt-BR')}</h3>
              <button 
                className="btn btn-primary btn-large"
                onClick={() => setStep('shipping')}
              >
                Prosseguir para Entrega
              </button>
            </div>
          </div>
        )}

        {step === 'shipping' && (
          <div className="shipping-section">
            <h2>Informações de Entrega</h2>
            <form>
              <input
                type="text"
                name="name"
                placeholder="Nome Completo"
                value={formData.name}
                onChange={handleFormChange}
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleFormChange}
                required
              />
              <input
                type="tel"
                name="phone"
                placeholder="Telefone"
                value={formData.phone}
                onChange={handleFormChange}
                required
              />
              <input
                type="text"
                name="address"
                placeholder="Endereço"
                value={formData.address}
                onChange={handleFormChange}
                required
              />
              <input
                type="text"
                name="city"
                placeholder="Cidade"
                value={formData.city}
                onChange={handleFormChange}
                required
              />
              <div className="form-row">
                <input
                  type="text"
                  name="state"
                  placeholder="Estado"
                  value={formData.state}
                  onChange={handleFormChange}
                  required
                />
                <input
                  type="text"
                  name="zipcode"
                  placeholder="CEP"
                  value={formData.zipcode}
                  onChange={handleFormChange}
                  required
                />
              </div>
              <div className="form-buttons">
                <button 
                  type="button"
                  className="btn btn-secondary"
                  onClick={() => setStep('cart')}
                >
                  Voltar
                </button>
                <button 
                  type="button"
                  className="btn btn-primary"
                  onClick={() => setStep('payment')}
                >
                  Continuar para Pagamento
                </button>
              </div>
            </form>
          </div>
        )}

        {step === 'payment' && (
          <div className="payment-section">
            <h2>Confirmação e Pagamento</h2>
            <div className="order-summary">
              <h3>Resumo do Pedido</h3>
              {cartItems.map(item => (
                <div key={item.cartId} className="summary-item">
                  <span>{item.name} x {item.quantity}</span>
                  <span>R$ {(item.price * item.quantity).toLocaleString('pt-BR')}</span>
                </div>
              ))}
              <div className="summary-total">
                <strong>Total: R$ {total.toLocaleString('pt-BR')}</strong>
              </div>
            </div>

            <div className="payment-methods">
              <h3>Forma de Pagamento</h3>
              <p className="payment-info">
                ✓ Você pode pagar na entrega via PIX, cartão de crédito ou débito
              </p>
            </div>

            <div className="form-buttons">
              <button 
                className="btn btn-secondary"
                onClick={() => setStep('shipping')}
              >
                Voltar
              </button>
              <button 
                className="btn btn-primary btn-large"
                onClick={handleSubmitOrder}
              >
                Finalizar Pedido
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Checkout
