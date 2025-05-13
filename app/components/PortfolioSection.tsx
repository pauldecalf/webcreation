'use client'
import React, { useState } from 'react'
import { ExternalLink } from 'lucide-react'
export const PortfolioSection = () => {
  const [activeFilter, setActiveFilter] = useState('all')
  const projects = [
    {
      title: 'Restaurant La Bonne Table',
      category: 'vitrine',
      image:
        'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      description:
        'Site vitrine moderne pour un restaurant gastronomique avec réservation en ligne.',
    },
    {
      title: 'Boutique Mode Élégance',
      category: 'ecommerce',
      image:
        'https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      description:
        'E-commerce de prêt-à-porter haut de gamme avec système de paiement sécurisé.',
    },
    {
      title: 'Cabinet Martin & Associés',
      category: 'vitrine',
      image:
        'https://images.unsplash.com/photo-1497215842964-222b430dc094?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      description:
        "Site professionnel pour un cabinet d'avocats avec prise de rendez-vous.",
    },
    {
      title: 'Artisanat du Bois',
      category: 'vitrine',
      image:
        'https://images.unsplash.com/photo-1503602642458-232111445657?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      description:
        'Vitrine pour un artisan menuisier mettant en valeur ses créations.',
    },
    {
      title: 'MédicConsult',
      category: 'application',
      image:
        'https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      description: 'Application web pour la gestion des rendez-vous médicaux.',
    },
    {
      title: 'Épicerie Fine En Ligne',
      category: 'ecommerce',
      image:
        'https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      description:
        'Boutique en ligne de produits gastronomiques avec livraison à domicile.',
    },
  ]
  const filteredProjects =
    activeFilter === 'all'
      ? projects
      : projects.filter((project) => project.category === activeFilter)
  return (
    <section id="portfolio" className="py-20 bg-secondary">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Nos Réalisations
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Découvrez quelques-uns de nos projets récents
          </p>
          <div className="flex flex-wrap justify-center gap-3 mt-8">
            <button
              onClick={() => setActiveFilter('all')}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${activeFilter === 'all' ? 'bg-primary text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
            >
              Tous les projets
            </button>
            <button
              onClick={() => setActiveFilter('vitrine')}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${activeFilter === 'vitrine' ? 'bg-primary text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
            >
              Sites Vitrines
            </button>
            <button
              onClick={() => setActiveFilter('ecommerce')}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${activeFilter === 'ecommerce' ? 'bg-primary text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
            >
              E-commerce
            </button>
            <button
              onClick={() => setActiveFilter('application')}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${activeFilter === 'application' ? 'bg-primary text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
            >
              Applications Web
            </button>
          </div>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow group"
            >
              <div className="relative overflow-hidden h-56">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-primary bg-opacity-70 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <button className="bg-white text-primary px-4 py-2 rounded-md flex items-center gap-2">
                    <span>Voir le projet</span>
                    <ExternalLink size={18} />
                  </button>
                </div>
              </div>
              <div className="p-5">
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600">{project.description}</p>
              </div>
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
            Discutons de votre projet
          </button>
        </div>
      </div>
    </section>
  )
}
