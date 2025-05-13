'use client'
import React, { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'
export const FaqSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0)
  const faqs = [
    {
      question: "Quels sont les délais de création d'un site web ?",
      answer:
        'Les délais varient selon la complexité du projet. Un site vitrine standard peut être réalisé en 2 à 3 semaines. Un site e-commerce ou une application web plus complexe peut nécessiter 4 à 8 semaines. Nous établissons un planning précis lors du lancement du projet et vous tenons informé de chaque étape.',
    },
    {
      question: 'Quelles technologies utilisez-vous pour créer les sites ?',
      answer:
        "Nous utilisons les technologies les plus modernes et performantes comme React, Next.js, Tailwind CSS et WordPress selon les besoins du projet. Nos sites sont responsive, optimisés pour le référencement et respectent les standards du web en matière d'accessibilité et de performances.",
    },
    {
      question: "Comment se déroule l'accompagnement après la mise en ligne ?",
      answer:
        "Nous proposons un accompagnement complet après la mise en ligne de votre site. Cela inclut une formation à l'utilisation de votre interface d'administration, un support technique réactif et des options de maintenance pour garantir la sécurité et les performances de votre site dans le temps.",
    },
    {
      question: 'Quelles sont les modalités de paiement ?',
      answer:
        'Nous demandons généralement un acompte de 30% à la signature du devis, puis 40% à la présentation des maquettes, et le solde de 30% à la livraison du site. Pour les projets de plus grande envergure, nous pouvons établir un échéancier personnalisé. Nous acceptons les virements bancaires et les paiements par CB.',
    },
    {
      question: 'Proposez-vous des services de référencement (SEO) ?',
      answer:
        "Oui, tous nos sites sont optimisés pour le référencement naturel dès leur conception. Nous proposons également des prestations SEO plus poussées comprenant l'optimisation technique, la création de contenu, le netlinking et le suivi des performances via des rapports mensuels.",
    },
    {
      question: 'Est-ce que je pourrai modifier mon site moi-même ?',
      answer:
        "Absolument ! Nous développons des interfaces d'administration intuitives qui vous permettent de modifier facilement le contenu de votre site (textes, images, produits, etc.). Nous vous formons à son utilisation et restons disponibles pour vous accompagner en cas de besoin.",
    },
  ]
  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }
  return (
    <section id="faq" className="py-20 bg-secondary">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Questions fréquentes
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Tout ce que vous devez savoir avant de démarrer votre projet web
          </p>
        </div>
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="mb-4 border border-gray-200 rounded-lg bg-white overflow-hidden"
            >
              <button
                className="w-full flex justify-between items-center p-5 text-left font-medium focus:outline-none"
                onClick={() => toggleFaq(index)}
              >
                <span className="text-gray-800">{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="flex-shrink-0 text-primary" />
                ) : (
                  <ChevronDown className="flex-shrink-0 text-gray-500" />
                )}
              </button>
              <div
                className={`transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'} overflow-hidden`}
              >
                <div className="p-5 pt-0 text-gray-600 border-t border-gray-100">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">Vous avez d'autres questions ?</p>
          <button
            onClick={() =>
              document.getElementById('contact')?.scrollIntoView({
                behavior: 'smooth',
              })
            }
            className="text-primary font-medium hover:underline"
          >
            Contactez-nous directement
          </button>
        </div>
      </div>
    </section>
  )
}
