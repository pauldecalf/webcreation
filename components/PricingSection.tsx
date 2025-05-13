import React from 'react'
import { Check } from 'lucide-react'
export const PricingSection = () => {
  const plans = [
    {
      name: 'Starter',
      price: '990€',
      description: 'Idéal pour les indépendants et petites entreprises',
      features: [
        "Site vitrine jusqu'à 5 pages",
        'Design responsive',
        'Formulaire de contact',
        'Optimisation SEO de base',
        'Hébergement pour 1 an',
        'Certificat SSL',
        'Mise en ligne en 2 semaines',
      ],
      popular: false,
    },
    {
      name: 'Pro',
      price: '1 990€',
      description: 'Pour les PME qui veulent se démarquer',
      features: [
        "Site vitrine jusqu'à 10 pages",
        'Design premium personnalisé',
        'Formulaire avancé multi-étapes',
        'Optimisation SEO complète',
        'Intégration Google Analytics',
        'Hébergement haute performance pour 1 an',
        'Formation à la mise à jour du site',
        'Mise en ligne en 3 semaines',
      ],
      popular: true,
    },
    {
      name: 'Premium',
      price: '3 490€',
      description: 'Solution complète pour entreprises exigeantes',
      features: [
        'Site sur-mesure (pages illimitées)',
        'Design exclusif avec animations',
        'E-commerce ou fonctionnalités avancées',
        'SEO avancé + stratégie de contenu',
        'Copywriting professionnel',
        'Intégration CRM / outils métier',
        'Maintenance et support prioritaire 1 an',
        'Mise en ligne en 4-6 semaines',
      ],
      popular: false,
    },
  ]
  return (
    <section id="pricing" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Nos Forfaits
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Des solutions adaptées à tous les budgets pour créer votre présence
            en ligne professionnelle
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`bg-white rounded-lg border ${plan.popular ? 'border-primary shadow-xl scale-105' : 'border-gray-200 shadow-lg'} transition-all hover:shadow-xl p-6 flex flex-col`}
            >
              {plan.popular && (
                <span className="bg-primary text-white text-sm font-medium px-3 py-1 rounded-full self-start mb-4">
                  Recommandé
                </span>
              )}
              <h3 className="text-xl font-bold mb-2 text-gray-800">
                {plan.name}
              </h3>
              <div className="mb-4">
                <span className="text-3xl font-bold text-primary">
                  {plan.price}
                </span>
                <span className="text-gray-500"> HT</span>
              </div>
              <p className="text-gray-600 mb-6">{plan.description}</p>
              <ul className="space-y-3 mb-8 flex-grow">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start">
                    <Check
                      size={20}
                      className="text-green-500 flex-shrink-0 mr-2"
                    />
                    <span className="text-gray-600">{feature}</span>
                  </li>
                ))}
              </ul>
              <button
                onClick={() =>
                  document.getElementById('contact')?.scrollIntoView({
                    behavior: 'smooth',
                  })
                }
                className={`w-full py-3 rounded-md font-medium ${plan.popular ? 'bg-primary text-white hover:bg-primary-light' : 'bg-gray-100 text-gray-800 hover:bg-gray-200'} transition-colors mt-auto`}
              >
                Choisir ce forfait
              </button>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">
            Besoin d'une solution personnalisée ?
          </p>
          <button
            onClick={() =>
              document.getElementById('contact')?.scrollIntoView({
                behavior: 'smooth',
              })
            }
            className="text-primary font-medium hover:underline"
          >
            Contactez-nous pour un devis sur mesure
          </button>
        </div>
      </div>
    </section>
  )
}
