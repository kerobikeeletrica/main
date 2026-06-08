import React from 'react'
import Hero from '../components/Hero'
import Benefits from '../components/Benefits'
import ProductCatalog from '../components/ProductCatalog'
import EconomyCalculator from '../components/EconomyCalculator'
import Testimonials from '../components/Testimonials'
import FAQ from '../components/FAQ'
import CtaSection from '../components/CtaSection'

function Home() {
  return (
    <div className="home-page">
      <Hero />
      <Benefits />
      <ProductCatalog />
      <EconomyCalculator />
      <Testimonials />
      <FAQ />
      <CtaSection />
    </div>
  )
}

export default Home
