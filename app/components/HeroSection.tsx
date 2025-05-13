'use client'
import React from 'react'
export const HeroSection = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact')
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
      })
    }
  }
  return (
    <section className="relative bg-gradient-to-br from-primary to-primary-light text-white pt-28 pb-20 md:pt-36 md:pb-32 overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?auto=format&fit=crop&q=80&w=1000&ixlib=rb-4.0.3')] opacity-10 bg-cover bg-center"></div>
      <div className="container mx-auto px-4 md:px-6 relative">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Créez votre présence en ligne{' '}
              <span className="text-blue-300">qui convertit</span>
            </h1>
            <p className="text-lg md:text-xl opacity-90 max-w-lg">
              Sites internet professionnels sur mesure pour PME, indépendants et
              artisans. Design moderne, performant et optimisé pour générer des
              contacts.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button
                onClick={scrollToContact}
                className="bg-white text-primary font-medium px-6 py-3 rounded-md hover:bg-opacity-90 transition-all shadow-lg transform hover:-translate-y-1"
              >
                Demander un devis gratuit
              </button>
              <button
                onClick={() =>
                  document.getElementById('services')?.scrollIntoView({
                    behavior: 'smooth',
                  })
                }
                className="border border-white text-white px-6 py-3 rounded-md hover:bg-white hover:bg-opacity-10 transition-all"
              >
                Découvrir nos services
              </button>
            </div>
          </div>
          <div className="hidden md:block">
            <img
              src="https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?auto=format&fit=crop&q=80&w=1000&ixlib=rb-4.0.3"
              alt="Création de site web professionnel"
              className="rounded-lg shadow-2xl transform -rotate-2 hover:rotate-0 transition-transform duration-500"
            />
          </div>
        </div>
        <div className="mt-16 md:mt-24 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          <div className="bg-white bg-opacity-10 backdrop-blur-sm p-4 rounded-lg">
            <p className="text-2xl md:text-3xl font-bold">150+</p>
            <p className="text-sm opacity-80">Sites livrés</p>
          </div>
          <div className="bg-white bg-opacity-10 backdrop-blur-sm p-4 rounded-lg">
            <p className="text-2xl md:text-3xl font-bold">98%</p>
            <p className="text-sm opacity-80">Clients satisfaits</p>
          </div>
          <div className="bg-white bg-opacity-10 backdrop-blur-sm p-4 rounded-lg">
            <p className="text-2xl md:text-3xl font-bold">24h</p>
            <p className="text-sm opacity-80">Support réactif</p>
          </div>
          <div className="bg-white bg-opacity-10 backdrop-blur-sm p-4 rounded-lg">
            <p className="text-2xl md:text-3xl font-bold">5 ans</p>
            <p className="text-sm opacity-80">D'expertise</p>
          </div>
        </div>
      </div>
    </section>
  )
}
