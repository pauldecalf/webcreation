'use client'
import React from 'react'
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Mail,
  Phone,
} from 'lucide-react'
export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">WebCréation</h3>
            <p className="text-gray-400 mb-4">
              Votre partenaire pour une présence web professionnelle et
              performante. Nous créons des sites internet qui convertissent vos
              visiteurs en clients.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Twitter size={20} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Instagram size={20} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Liens rapides</h3>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() =>
                    document.getElementById('services')?.scrollIntoView({
                      behavior: 'smooth',
                    })
                  }
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Nos services
                </button>
              </li>
              <li>
                <button
                  onClick={() =>
                    document.getElementById('pricing')?.scrollIntoView({
                      behavior: 'smooth',
                    })
                  }
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Nos forfaits
                </button>
              </li>
              <li>
                <button
                  onClick={() =>
                    document.getElementById('portfolio')?.scrollIntoView({
                      behavior: 'smooth',
                    })
                  }
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Nos réalisations
                </button>
              </li>
              <li>
                <button
                  onClick={() =>
                    document.getElementById('testimonials')?.scrollIntoView({
                      behavior: 'smooth',
                    })
                  }
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Témoignages
                </button>
              </li>
              <li>
                <button
                  onClick={() =>
                    document.getElementById('contact')?.scrollIntoView({
                      behavior: 'smooth',
                    })
                  }
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Contactez-nous</h3>
            <div className="space-y-3">
              <div className="flex items-center">
                <Mail size={18} className="mr-2 text-gray-400" />
                <span className="text-gray-400">contact@webcreation.fr</span>
              </div>
              <div className="flex items-center">
                <Phone size={18} className="mr-2 text-gray-400" />
                <span className="text-gray-400">01 23 45 67 89</span>
              </div>
              <p className="text-gray-400">
                15 Rue de la Création
                <br />
                75002 Paris, France
              </p>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Newsletter</h3>
            <p className="text-gray-400 mb-4">
              Inscrivez-vous pour recevoir nos conseils et actualités web
            </p>
            <form className="flex">
              <input
                type="email"
                placeholder="Votre email"
                className="px-4 py-2 bg-gray-800 text-white rounded-l-md focus:outline-none flex-grow"
              />
              <button
                type="submit"
                className="bg-primary px-4 py-2 rounded-r-md hover:bg-primary-light transition-colors"
              >
                OK
              </button>
            </form>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} WebCréation. Tous droits réservés.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a
              href="#"
              className="text-gray-400 hover:text-white text-sm transition-colors"
            >
              Mentions légales
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-white text-sm transition-colors"
            >
              CGV
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-white text-sm transition-colors"
            >
              Politique de confidentialité
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
