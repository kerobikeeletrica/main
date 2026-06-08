import React from 'react'
import Hero from '../components/Hero'
import ProductCatalog from '../components/ProductCatalog'
import ModelComparison from '../components/ModelComparison'
import Benefits from '../components/Benefits'
import EconomyCalculator from '../components/EconomyCalculator'
import DeliveryInfo from '../components/DeliveryInfo'
import Testimonials from '../components/Testimonials'
import FAQ from '../components/FAQ'

function Home() {
  return (
    <div className="home-page">
      <Hero />
      <Benefits />
      <ProductCatalog />
      <ModelComparison />
      <EconomyCalculator />
      <DeliveryInfo />
      <Testimonials />
      <FAQ />
    </div>
  )
}

export default Home
