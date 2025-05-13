import React from 'react'
import { Header } from './components/Header'
import { HeroSection } from './components/HeroSection'
import { ServicesSection } from './components/ServicesSection'
import { PricingSection } from './components/PricingSection'
import { FeaturesSection } from './components/FeaturesSection'
import { TestimonialsSection } from './components/TestimonialsSection'
import { PortfolioSection } from './components/PortfolioSection'
import { ContactSection } from './components/ContactSection'
import { FaqSection } from './components/FaqSection'
import { Footer } from './components/Footer'

export default function Home() {
  return (
    <div className="font-sans antialiased text-gray-800">
      <Header />
      <main>
        <HeroSection />
        <ServicesSection />
        <PricingSection />
        <FeaturesSection />
        <TestimonialsSection />
        <PortfolioSection />
        <ContactSection />
        <FaqSection />
      </main>
      <Footer />
    </div>
  )
}
