'use client'
import React from 'react'
import { Clock, Users, Palette, Zap } from 'lucide-react'
export const FeaturesSection = () => {
  const features = [
    {
      icon: <Clock size={48} className="text-primary" />,
      title: 'Réactivité garantie',
      description:
        'Nous répondons à vos demandes sous 24h et vous accompagnons tout au long du projet avec un suivi personnalisé.',
    },
    {
      icon: <Users size={48} className="text-primary" />,
      title: 'Accompagnement complet',
      description:
        "De la conception à la mise en ligne, nous vous guidons à chaque étape et vous formons à l'utilisation de votre site.",
    },
    {
      icon: <Palette size={48} className="text-primary" />,
      title: 'Design sur-mesure',
      description:
        "Chaque site est unique et conçu pour refléter votre identité visuelle tout en optimisant l'expérience utilisateur.",
    },
    {
      icon: <Zap size={48} className="text-primary" />,
      title: 'Performances optimales',
      description:
        'Nos sites sont optimisés pour une vitesse de chargement rapide et une expérience fluide sur tous les appareils.',
    },
  ]
  return (
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Pourquoi nous choisir ?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Notre expertise et notre approche font la différence pour votre
            projet web
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg text-center hover:transform hover:-translate-y-1 transition-transform"
            >
              <div className="inline-block mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
        <div className="mt-16 bg-primary rounded-lg p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">
            Prêt à lancer votre projet web ?
          </h3>
          <p className="mb-6 max-w-2xl mx-auto">
            Discutons ensemble de vos besoins et objectifs pour créer un site
            internet qui vous ressemble et qui convertit vos visiteurs en
            clients.
          </p>
          <button
            onClick={() =>
              document.getElementById('contact')?.scrollIntoView({
                behavior: 'smooth',
              })
            }
            className="bg-white text-primary font-medium px-6 py-3 rounded-md hover:bg-gray-100 transition-colors"
          >
            Demander un devis gratuit
          </button>
        </div>
      </div>
    </section>
  )
}
