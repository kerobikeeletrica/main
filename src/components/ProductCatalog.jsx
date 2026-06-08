import React, { useState, useEffect } from 'react'
import { supabase } from '../services/supabaseClient'
import ProductCard from './ProductCard'
import { mockProducts } from '../data/products'
import '../styles/product-catalog.css'




function ProductCatalog() {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchProducts()
  }, [])

  const fetchProducts = async () => {
    try {
      setLoading(true)
      const { data, error } = await supabase
        .from('products')
        .select('*')
        .order('created_at', { ascending: false })

      if (error) throw error
      setProducts(data && data.length > 0 ? data : mockProducts)
    } catch {
      setProducts(mockProducts)
    } finally {
      setLoading(false)
    }
  }

  if (loading) return <div className="loading">Carregando modelos...</div>

  return (
    <section className="product-catalog" id="modelos">
      <div className="catalog-header">
        <div className="catalog-header-left">
          <span className="section-label">Lineup Kero Bike</span>
          <h2 className="section-title">
            Seis modelos.<br />
            <span className="muted">Uma única filosofia.</span>
          </h2>
        </div>
        <p className="catalog-header-right">
          Design funcional, alma urbana. Engenharia que respeita o asfalto e o seu bolso.
        </p>
      </div>

      <div className="products-grid">
        {products.length > 0 ? (
          products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))
        ) : (
          <p className="no-products">Nenhum produto disponível no momento</p>
        )}
      </div>
    </section>
  )
}

export default ProductCatalog
