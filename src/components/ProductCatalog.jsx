import React, { useState, useEffect } from 'react'
import { supabase } from '../services/supabaseClient'
import ProductCard from './ProductCard'
import '../styles/product-catalog.css'

const mockProducts = [
  {
    id: 1,
    name: 'X13',
    category: 'Premium',
    featured: true,
    description: 'Autonomia de sobra e motor robusto para o dia a dia urbano.',
    price: 8499,
    image: 'https://movamotos.com/__l5e/assets-v1/2dfc3db0-fa52-4063-a3c0-f69bc3ef947a/mova-x13.png',
    motor: '1000W',
    max_speed: 'Até 32 km/h',
    range: 'Até 60 km',
    charge_time: '5 a 6 h',
    battery: 'Lítio removível 60V 20Ah',
    weight_capacity: 'Até 180 kg'
  },
  {
    id: 2,
    name: 'X11',
    category: 'Brushless',
    featured: false,
    description: 'Motor brushless de 1000W com bateria de longa duração 60V 23Ah.',
    price: 7999,
    image: 'https://movamotos.com/__l5e/assets-v1/43c42b4f-897b-448b-8384-601cc3e45c95/mova-x11.png',
    motor: '1000W Brushless',
    max_speed: 'Até 32 km/h',
    range: 'Até 50 km',
    charge_time: '6 a 8 h',
    battery: 'Lítio removível 60V 23Ah',
    weight_capacity: 'Até 150 kg'
  },
  {
    id: 3,
    name: 'TM28',
    category: 'Compacta',
    featured: false,
    description: 'Leve, prática e eficiente para deslocamentos curtos do dia a dia.',
    price: 5499,
    image: 'https://movamotos.com/__l5e/assets-v1/858f2d93-3fd8-4292-9d3c-f3448d1f8720/mova-tm28.png',
    motor: '800W',
    max_speed: 'Até 32 km/h',
    range: 'Até 50 km',
    charge_time: '4 a 6 h',
    battery: '48V 13Ah',
    weight_capacity: 'Até 120 kg'
  },
  {
    id: 4,
    name: 'NEO',
    category: 'Equilibrada',
    featured: false,
    description: 'Performance e conforto em uma scooter elétrica versátil.',
    price: 8499,
    image: 'https://movamotos.com/__l5e/assets-v1/15038163-68c5-476d-b4c0-385068d80bea/mova-neo.png',
    motor: '1000W',
    max_speed: 'Até 32 km/h',
    range: 'Até 55 km',
    charge_time: '6 a 8 h',
    battery: 'Lítio',
    weight_capacity: 'Até 180 kg'
  },
  {
    id: 5,
    name: 'TANK',
    category: 'Robusta',
    featured: false,
    description: 'Maior autonomia e capacidade de carga da linha. Construída para durar.',
    price: 10490,
    image: 'https://movamotos.com/__l5e/assets-v1/6ede60df-2509-4711-a795-863b3c74e7b9/mova-tank.png',
    motor: '1000W',
    max_speed: 'Até 32 km/h',
    range: 'Até 65 km',
    charge_time: '4 a 8 h',
    battery: 'Lítio',
    weight_capacity: 'Até 200 kg'
  },
  {
    id: 6,
    name: 'ZUB N400',
    category: 'Entrada',
    featured: false,
    description: 'Opção econômica e prática para começar a vida elétrica.',
    price: 3990,
    image: 'https://movamotos.com/__l5e/assets-v1/2a7b4f11-f74f-4964-9058-7707e2ee5290/mova-zub-n400.png',
    motor: '400W',
    max_speed: 'Até 32 km/h',
    range: 'Até 40 km',
    charge_time: '4 h',
    battery: 'Chumbo removível',
    weight_capacity: 'Até 140 kg'
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
