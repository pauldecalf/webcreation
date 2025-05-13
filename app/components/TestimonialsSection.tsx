'use client'
import React from 'react'
import { Star } from 'lucide-react'
export const TestimonialsSection = () => {
  const testimonials = [
    {
      content:
        "Grâce à WebCréation, mon cabinet d'architecture a vu ses demandes de devis augmenter de 40%. Le site est élégant, rapide et parfaitement adapté à mon image de marque.",
      author: 'Marie Dubois',
      position: 'Architecte DPLG',
      avatar: 'https://randomuser.me/api/portraits/women/12.jpg',
      rating: 5,
    },
    {
      content:
        'Un accompagnement de qualité et une réelle écoute de mes besoins. Le résultat dépasse mes attentes et mes clients me complimentent régulièrement sur mon site.',
      author: 'Thomas Martin',
      position: 'Artisan Menuisier',
      avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
      rating: 5,
    },
    {
      content:
        'Je cherchais un site e-commerce pour ma boutique de prêt-à-porter. WebCréation a su créer une boutique en ligne qui correspond parfaitement à mon univers.',
      author: 'Sophie Laurent',
      position: 'Gérante de boutique',
      avatar: 'https://randomuser.me/api/portraits/women/65.jpg',
      rating: 5,
    },
    {
      content:
        "Un travail remarquable et professionnel. L'équipe est réactive et à l'écoute. Je recommande vivement leurs services à tous les entrepreneurs.",
      author: 'Jean Moreau',
      position: 'Consultant indépendant',
      avatar: 'https://randomuser.me/api/portraits/men/67.jpg',
      rating: 4,
    },
  ]
  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Ce que disent nos clients
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Découvrez les témoignages de clients satisfaits par nos services
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-secondary p-6 rounded-lg border border-gray-100 hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={18}
                    className={
                      i < testimonial.rating
                        ? 'text-yellow-400 fill-yellow-400'
                        : 'text-gray-300'
                    }
                  />
                ))}
              </div>
              <p className="text-gray-600 italic mb-6">
                "{testimonial.content}"
              </p>
              <div className="flex items-center">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.author}
                  className="w-12 h-12 rounded-full mr-4 object-cover"
                />
                <div>
                  <h4 className="font-bold text-gray-800">
                    {testimonial.author}
                  </h4>
                  <p className="text-gray-500 text-sm">
                    {testimonial.position}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
