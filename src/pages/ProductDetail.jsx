import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { supabase } from '../services/supabaseClient'
import '../styles/product-detail.css'

function ProductDetail() {
  const { id } = useParams()
  const navigate = useNavigate()
  const [product, setProduct] = useState(null)
  const [loading, setLoading] = useState(true)
  const [quantity, setQuantity] = useState(1)
  const [reviews, setReviews] = useState([])

  useEffect(() => {
    fetchProduct()
    fetchReviews()
  }, [id])

  const fetchProduct = async () => {
    try {
      const { data, error } = await supabase
        .from('products')
        .select('*')
        .eq('id', id)
        .single()

      if (error) throw error
      setProduct(data)
    } catch (err) {
      console.error('Erro ao buscar produto:', err)
      // Dados de exemplo
      setProduct(mockProduct)
    } finally {
      setLoading(false)
    }
  }

  const fetchReviews = async () => {
    try {
      const { data, error } = await supabase
        .from('reviews')
        .select('*')
        .eq('product_id', id)

      if (error) throw error
      setReviews(data || [])
    } catch (err) {
      console.error('Erro ao buscar reviews:', err)
    }
  }

  const handleAddToCart = () => {
    const cart = JSON.parse(localStorage.getItem('cart') || '[]')
    cart.push({
      ...product,
      quantity,
      cartId: Date.now()
    })
    localStorage.setItem('cart', JSON.stringify(cart))
    navigate('/checkout')
  }

  if (loading) return <div className="loading">Carregando produto...</div>
  if (!product) return <div className="error">Produto não encontrado</div>

  return (
    <div className="product-detail-page">
      <button className="back-button" onClick={() => navigate('/')}>
        ← Voltar
      </button>

      <div className="product-detail-container">
        <div className="product-detail-image">
          <img src={product.image || '🏍️'} alt={product.name} />
        </div>

        <div className="product-detail-info">
          <span className="product-category">{product.category}</span>
          <h1 className="product-title">{product.name}</h1>
          
          <div className="product-rating">
            <span className="stars">★★★★★</span>
            <span className="review-count">({reviews.length} avaliações)</span>
          </div>

          <p className="product-long-description">{product.description}</p>

          <div className="price-section">
            <span className="price">R$ {product.price.toLocaleString('pt-BR')}</span>
            <span className="availability">Em estoque</span>
          </div>

          <div className="specs-detail">
            <h3>Especificações Técnicas</h3>
            <div className="specs-grid">
              <div className="detail-spec-item">
                <strong>Motor:</strong> {product.motor}
              </div>
              <div className="detail-spec-item">
                <strong>Velocidade Máxima:</strong> {product.max_speed}
              </div>
              <div className="detail-spec-item">
                <strong>Autonomia:</strong> {product.range}
              </div>
              <div className="detail-spec-item">
                <strong>Tempo de Recarga:</strong> {product.charge_time}
              </div>
              <div className="detail-spec-item">
                <strong>Bateria:</strong> {product.battery}
              </div>
              <div className="detail-spec-item">
                <strong>Capacidade de Carga:</strong> {product.weight_capacity}
              </div>
            </div>
          </div>

          <div className="purchase-section">
            <div className="quantity-selector">
              <label>Quantidade:</label>
              <select value={quantity} onChange={(e) => setQuantity(parseInt(e.target.value))}>
                {[1, 2, 3, 4, 5].map(num => (
                  <option key={num} value={num}>{num}</option>
                ))}
              </select>
            </div>
            <button className="btn btn-primary btn-large" onClick={handleAddToCart}>
              Adicionar ao Carrinho
            </button>
          </div>

          <div className="shipping-info">
            <p>✓ Entrega em 24h para São Paulo</p>
            <p>✓ Pague na entrega</p>
            <p>✓ 7 dias de garantia de devolução</p>
          </div>
        </div>
      </div>

      {reviews.length > 0 && (
        <div className="reviews-section">
          <h2>Avaliações dos Clientes</h2>
          <div className="reviews-list">
            {reviews.map((review, index) => (
              <div key={index} className="review-item">
                <div className="review-header">
                  <strong>{review.author}</strong>
                  <span className="review-rating">{'★'.repeat(review.rating)}</span>
                </div>
                <p className="review-text">{review.comment}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

const mockProduct = {
  id: 1,
  name: 'X13 Premium',
  category: 'Premium',
  description: 'Autonomia de sobra e motor robusto para o dia a dia urbano. A moto perfeita para quem quer máximo desempenho.',
  price: 8499,
  image: '🏍️',
  motor: '1000W',
  max_speed: 'Até 32 km/h',
  range: 'Até 60 km',
  charge_time: '5 a 6 horas',
  battery: 'Lítio removível 60V 20Ah',
  weight_capacity: 'Até 180 kg'
}

export default ProductDetail
