import React, { useState, useEffect } from 'react'
import { supabase } from '../services/supabaseClient'
import ProductCard from './ProductCard'
import '../styles/product-catalog.css'

function ProductCatalog() {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

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
      setProducts(data || [])
    } catch (err) {
      console.error('Erro ao buscar produtos:', err)
      setError(err.message)
      // Dados de exemplo para desenvolvimento
      setProducts(mockProducts)
    } finally {
      setLoading(false)
    }
  }

  if (loading) return <div className="loading">Carregando produtos...</div>

  return (
    <section className="product-catalog" id="modelos">
      <div className="section-header">
        <h2 className="section-title">Lineup Completo</h2>
        <p className="section-subtitle">Diversos modelos para diferentes estilos de vida</p>
      </div>

      {error && <div className="error-message">{error}</div>}

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

// Dados de exemplo para desenvolvimento
const mockProducts = [
  {
    id: 1,
    name: 'X13 Premium',
    category: 'Premium',
    description: 'Autonomia de sobra e motor robusto para o dia a dia urbano.',
    price: 8499,
    image: '🏍️',
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
    description: 'Motor brushless de 1000W com bateria de longa duração.',
    price: 7999,
    image: '🏍️',
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
    description: 'O modelo perfeito para começar sua jornada elétrica.',
    price: 5999,
    image: '🏍️',
    motor: '800W',
    max_speed: 'Até 25 km/h',
    range: 'Até 40 km',
    charge_time: '4 a 5 h',
    battery: 'Lítio 60V 15Ah',
    weight_capacity: 'Até 120 kg'
  }
]

export default ProductCatalog
