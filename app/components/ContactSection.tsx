'use client'
import React, { useState } from 'react'
import { Mail, Phone, MapPin, Send } from 'lucide-react'
export const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: '',
    budget: '',
    message: '',
  })
  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Dans un vrai site, on enverrait ces données à un backend
    alert('Merci pour votre message ! Nous vous contacterons très rapidement.')
    setFormData({
      name: '',
      email: '',
      phone: '',
      projectType: '',
      budget: '',
      message: '',
    })
  }
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Demandez un devis gratuit
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Parlons de votre projet et trouvons ensemble la solution qui vous
            convient le mieux
          </p>
        </div>
        <div className="grid md:grid-cols-5 gap-8 max-w-6xl mx-auto">
          <div className="md:col-span-2 bg-primary text-white p-8 rounded-lg">
            <h3 className="text-2xl font-bold mb-6">Contactez-nous</h3>
            <div className="space-y-6">
              <div className="flex items-start">
                <Mail className="mr-4 flex-shrink-0" />
                <div>
                  <h4 className="font-bold">Email</h4>
                  <p className="opacity-90">contact@webcreation.fr</p>
                </div>
              </div>
              <div className="flex items-start">
                <Phone className="mr-4 flex-shrink-0" />
                <div>
                  <h4 className="font-bold">Téléphone</h4>
                  <p className="opacity-90">01 23 45 67 89</p>
                </div>
              </div>
              <div className="flex items-start">
                <MapPin className="mr-4 flex-shrink-0" />
                <div>
                  <h4 className="font-bold">Adresse</h4>
                  <p className="opacity-90">
                    15 Rue de la Création
                    <br />
                    75002 Paris, France
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-12">
              <h4 className="font-bold mb-4">Horaires d'ouverture</h4>
              <p className="opacity-90">Lundi - Vendredi: 9h - 18h</p>
              <p className="opacity-90">Samedi - Dimanche: Fermé</p>
            </div>
          </div>
          <div className="md:col-span-3 bg-secondary p-8 rounded-lg">
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Nom complet *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="Votre nom"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="votre@email.com"
                  />
                </div>
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Téléphone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="01 23 45 67 89"
                  />
                </div>
                <div>
                  <label
                    htmlFor="projectType"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Type de projet *
                  </label>
                  <select
                    id="projectType"
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  >
                    <option value="">Sélectionnez</option>
                    <option value="site-vitrine">Site vitrine</option>
                    <option value="e-commerce">Site e-commerce</option>
                    <option value="refonte">Refonte de site</option>
                    <option value="seo">Référencement SEO</option>
                    <option value="autre">Autre</option>
                  </select>
                </div>
                <div>
                  <label
                    htmlFor="budget"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Budget estimé
                  </label>
                  <select
                    id="budget"
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  >
                    <option value="">Sélectionnez</option>
                    <option value="moins-1000">Moins de 1 000€</option>
                    <option value="1000-2000">1 000€ - 2 000€</option>
                    <option value="2000-5000">2 000€ - 5 000€</option>
                    <option value="plus-5000">Plus de 5 000€</option>
                  </select>
                </div>
                <div className="md:col-span-2">
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Votre projet *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="Décrivez votre projet et vos besoins..."
                  ></textarea>
                </div>
                <div className="md:col-span-2">
                  <button
                    type="submit"
                    className="w-full bg-primary text-white px-6 py-3 rounded-md hover:bg-primary-light transition-colors flex items-center justify-center gap-2"
                  >
                    <span>Recevoir mon devis gratuit</span>
                    <Send size={18} />
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
