import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/product-card.css'

function ProductCard({ product }) {
  return (
    <article className="product-card">
      <div className="product-badge">{product.category}</div>
      
      <div className="product-image">
        <img src={product.image || '🏍️'} alt={product.name} />
      </div>

      <div className="product-info">
        <h3 className="product-name">{product.name}</h3>
        <p className="product-description">{product.description}</p>

        <div className="product-price">
          R${product.price.toLocaleString('pt-BR')}
        </div>

        <div className="product-specs">
          <div className="spec">
            <span className="spec-label">Motor</span>
            <span className="spec-value">{product.motor}</span>
          </div>
          <div className="spec">
            <span className="spec-label">Vel. Máx</span>
            <span className="spec-value">{product.max_speed}</span>
          </div>
          <div className="spec">
            <span className="spec-label">Autonomia</span>
            <span className="spec-value">{product.range}</span>
          </div>
          <div className="spec">
            <span className="spec-label">Recarga</span>
            <span className="spec-value">{product.charge_time}</span>
          </div>
          <div className="spec">
            <span className="spec-label">Bateria</span>
            <span className="spec-value">{product.battery}</span>
          </div>
          <div className="spec">
            <span className="spec-label">Carga</span>
            <span className="spec-value">{product.weight_capacity}</span>
          </div>
        </div>

        <Link to={`/produto/${product.id}`} className="btn btn-outline">
          Ver Detalhes
        </Link>
      </div>
    </article>
  )
}

export default ProductCard
