import React, { useState, useEffect } from 'react'
import { supabase } from '../services/supabaseClient'
import ProductCard from './ProductCard'
import '../styles/product-catalog.css'

const mockProducts = [
  {
    id: 1,
    name: 'X13 Premium',
    category: 'Premium',
    featured: true,
    description: 'Autonomia de sobra e motor robusto para o dia a dia urbano.',
    price: 8499,
    image: null,
    motor: '1000W',
    max_speed: 'Até 32 km/h',
    range: 'Até 60 km',
    charge_time: '5 a 6 h',
    battery: 'Lítio removível 60V 20Ah',
    weight_capacity: 'Até 180 kg'
  },
  {
    id: 2,
    name: 'X11 Brushless',
    category: 'Brushless',
    featured: false,
    description: 'Motor brushless de 1000W com bateria de longa duração.',
    price: 7999,
    image: null,
    motor: '1000W Brushless',
    max_speed: 'Até 32 km/h',
    range: 'Até 50 km',
    charge_time: '6 a 8 h',
    battery: 'Lítio removível 60V 23Ah',
    weight_capacity: 'Até 150 kg'
  },
  {
    id: 3,
    name: 'X9 Standard',
    category: 'Standard',
    featured: false,
    description: 'O modelo perfeito para começar sua jornada elétrica.',
    price: 5999,
    image: null,
    motor: '800W',
    max_speed: 'Até 25 km/h',
    range: 'Até 40 km',
    charge_time: '4 a 5 h',
    battery: 'Lítio 60V 15Ah',
    weight_capacity: 'Até 120 kg'
  }
]

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
          <span className="section-label">Lineup Kerobike</span>
          <h2 className="section-title">
            Três modelos.<br />
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
