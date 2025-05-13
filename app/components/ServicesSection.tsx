'use client'
import React from 'react'
import { Monitor, ShoppingBag, Search, RefreshCw, Wrench } from 'lucide-react'
export const ServicesSection = () => {
  const services = [
    {
      icon: <Monitor size={40} className="text-primary" />,
      title: 'Sites Vitrines',
      description:
        'Présentez votre activité avec élégance et efficacité grâce à un site vitrine sur-mesure, responsive et optimisé pour convertir vos visiteurs.',
    },
    {
      icon: <ShoppingBag size={40} className="text-primary" />,
      title: 'E-commerce',
      description:
        'Vendez vos produits en ligne avec une boutique e-commerce intuitive, sécurisée et optimisée pour maximiser vos ventes.',
    },
    {
      icon: <Search size={40} className="text-primary" />,
      title: 'Référencement SEO',
      description:
        'Améliorez votre visibilité sur Google et attirez plus de clients grâce à notre expertise en référencement naturel.',
    },
    {
      icon: <RefreshCw size={40} className="text-primary" />,
      title: 'Refonte de site',
      description:
        'Modernisez votre présence en ligne avec une refonte complète de votre site web pour améliorer ses performances et son design.',
    },
    {
      icon: <Wrench size={40} className="text-primary" />,
      title: 'Maintenance',
      description:
        "Gardez votre site à jour, sécurisé et performant grâce à nos services de maintenance et d'assistance technique.",
    },
  ]
  return (
    <section id="services" className="py-20 bg-secondary">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Nos Services
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Des solutions web complètes pour développer votre présence en ligne
            et attirer de nouveaux clients
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow border border-gray-100"
            >
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">
                {service.title}
              </h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <button
            onClick={() =>
              document.getElementById('contact')?.scrollIntoView({
                behavior: 'smooth',
              })
            }
            className="bg-primary text-white px-6 py-3 rounded-md hover:bg-primary-light transition-colors"
          >
            Parlons de votre projet
          </button>
        </div>
      </div>
    </section>
  )
}
