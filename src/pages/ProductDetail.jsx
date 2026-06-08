import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { supabase } from '../services/supabaseClient'
import { Helmet } from 'react-helmet-async'
import ProductImageCarousel from '../components/ProductImageCarousel'
import { mockProducts } from '../data/products'
import styles from '../styles/product-detail.module.css'

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
      // Fallback para dados locais
      const found = mockProducts.find(p => String(p.id) === String(id))
      setProduct(found || mockProducts[0])
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
    } catch {
      setReviews([])
    }
  }

  const handleWhatsApp = () => {
    const msg = encodeURIComponent(
      `Olá! Tenho interesse na ${product.name} por R$ ${product.price.toLocaleString('pt-BR')}. Podem me passar mais informações?`
    )
    window.open(`https://bit.ly/2hRFHnW?text=${msg}`, '_blank')
  }

  const handleAddToCart = () => {
    const cart = JSON.parse(localStorage.getItem('cart') || '[]')
    cart.push({ ...product, quantity, cartId: Date.now() })
    localStorage.setItem('cart', JSON.stringify(cart))
    navigate('/checkout')
  }

  if (loading) return <div className={styles.loadingState}>Carregando produto...</div>
  if (!product) return <div className={styles.errorState}>Produto não encontrado</div>

  const productImages = product.images?.length
    ? product.images
    : product.image
    ? [product.image]
    : []

  return (
    <div className={styles.productDetailPage}>
      <Helmet>
        <title>{product.name} – Kero Bike Veículos Elétricos</title>
        <meta name="description" content={product.description} />
      </Helmet>

      <button className={styles.backButton} onClick={() => navigate('/')}>
        ← Voltar ao catálogo
      </button>

      <div className={styles.productDetailContainer}>
        {/* Coluna da imagem */}
        <div className={styles.productDetailImage}>
          <ProductImageCarousel images={productImages} />
        </div>

        {/* Coluna das informações */}
        <div className={styles.productDetailInfo}>
          <span className={styles.productCategory}>{product.category}</span>
          <h1 className={styles.productTitle}>{product.name}</h1>

          <div className={styles.productRating}>
            <span className={styles.stars}>★★★★★</span>
            <span className={styles.reviewCount}>
              {reviews.length > 0 ? `${reviews.length} avaliações` : 'Sem avaliações ainda'}
            </span>
          </div>

          <p className={styles.productLongDescription}>{product.description}</p>

          {/* Destaques */}
          {product.highlights && (
            <ul className={styles.highlightsList}>
              {product.highlights.map((h, i) => (
                <li key={i} className={styles.highlightItem}>✓ {h}</li>
              ))}
            </ul>
          )}

          {/* Preço */}
          <div className={styles.priceSection}>
            <span className={styles.price}>
              R$ {product.price.toLocaleString('pt-BR')}
            </span>
            <span className={styles.availability}>Em estoque · Pronta entrega</span>
          </div>

          {/* Especificações */}
          <div className={styles.specsDetail}>
            <h3>Especificações Técnicas</h3>
            <div className={styles.specsGrid}>
              <div className={styles.detailSpecItem}>
                <strong>Motor:</strong> {product.motor}
              </div>
              <div className={styles.detailSpecItem}>
                <strong>Vel. Máxima:</strong> {product.max_speed}
              </div>
              <div className={styles.detailSpecItem}>
                <strong>Autonomia:</strong> {product.range}
              </div>
              <div className={styles.detailSpecItem}>
                <strong>Recarga:</strong> {product.charge_time}
              </div>
              <div className={styles.detailSpecItem}>
                <strong>Bateria:</strong> {product.battery}
              </div>
              <div className={styles.detailSpecItem}>
                <strong>Cap. de Carga:</strong> {product.weight_capacity}
              </div>
            </div>
          </div>

          {/* Ações */}
          <div className={styles.purchaseSection}>
            <div className={styles.quantitySelector}>
              <label>Qtd:</label>
              <select value={quantity} onChange={(e) => setQuantity(parseInt(e.target.value))}>
                {[1, 2, 3, 4, 5].map(num => (
                  <option key={num} value={num}>{num}</option>
                ))}
              </select>
            </div>
            <button className={styles.btnPrimaryLarge} onClick={handleAddToCart}>
              Adicionar ao Carrinho
            </button>
          </div>

          <button className={styles.btnWhatsapp} onClick={handleWhatsApp}>
            💬 Consultar pelo WhatsApp
          </button>

          {/* Info de entrega */}
          <div className={styles.shippingInfo}>
            <p>✓ Pronta entrega · Rio de Janeiro</p>
            <p>✓ Parcelamos em até 48x</p>
            <p>✓ Pague na entrega</p>
            <p>✓ Sem CNH necessária</p>
          </div>
        </div>
      </div>

      {/* Avaliações */}
      {reviews.length > 0 && (
        <div className={styles.reviewsSection}>
          <h2>Avaliações dos Clientes</h2>
          <div className={styles.reviewsList}>
            {reviews.map((review, index) => (
              <div key={index} className={styles.reviewItem}>
                <div className={styles.reviewHeader}>
                  <strong>{review.author}</strong>
                  <span className={styles.reviewRating}>{'★'.repeat(review.rating)}</span>
                </div>
                <p className={styles.reviewText}>{review.comment}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default ProductDetail
