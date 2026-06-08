import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/product-card.css'

function ProductCard({ product }) {
  const isFeatured = product.featured || product.category === 'Premium'

  return (
    <article className={`product-card ${isFeatured ? 'featured' : ''}`}>
      {isFeatured && <div className="product-badge">Destaque</div>}

      <div className="product-top">
        <span className="product-category-label">{product.category}</span>
        <h3 className="product-name">{product.name}</h3>
        <p className="product-description">{product.description}</p>
      </div>

      <div className="product-image-wrap">
        {product.image && !product.image.includes('🏍') ? (
          <img src={product.image} alt={product.name} loading="lazy" />
        ) : (
          <span className="product-image-emoji">🛵</span>
        )}
      </div>

      <div className="product-price">
        R$ {product.price.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
      </div>

      <div className="product-specs">
        <div className="spec-item">
          <span className="spec-label">Motor</span>
          <span className="spec-value">{product.motor}</span>
        </div>
        <div className="spec-item">
          <span className="spec-label">Vel. Máx</span>
          <span className="spec-value">{product.max_speed}</span>
        </div>
        <div className="spec-item">
          <span className="spec-label">Autonomia</span>
          <span className="spec-value highlight">{product.range}</span>
        </div>
        <div className="spec-item">
          <span className="spec-label">Recarga</span>
          <span className="spec-value">{product.charge_time}</span>
        </div>
        <div className="spec-item">
          <span className="spec-label">Bateria</span>
          <span className="spec-value">{product.battery}</span>
        </div>
        <div className="spec-item">
          <span className="spec-label">Carga</span>
          <span className="spec-value">{product.weight_capacity}</span>
        </div>
      </div>

      <div className="product-cta">
        <Link to={`/produto/${product.id}`} className="btn btn-outline">
          Ver Detalhes
        </Link>
      </div>
    </article>
  )
}

export default ProductCard
