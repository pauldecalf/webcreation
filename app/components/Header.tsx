"use client"

import React, { useEffect, useState } from 'react'
import { Menu, X, ChevronDown } from 'lucide-react'
export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])
  const scrollTo = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
      })
      setIsMenuOpen(false)
    }
  }
  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <span className={`font-bold text-2xl ${isScrolled ? 'text-black' : 'text-white'}`}>WebCréation</span>
          </div>
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollTo('services')}
              className={`hover:text-primary transition-colors ${isScrolled ? 'text-black' : 'text-white'}`}
            >
              Services
            </button>
            <button
              onClick={() => scrollTo('pricing')}
              className={`hover:text-primary transition-colors ${isScrolled ? 'text-black' : 'text-white'}`}
            >
              Forfaits
            </button>
            <button
              onClick={() => scrollTo('portfolio')}
              className={`hover:text-primary transition-colors ${isScrolled ? 'text-black' : 'text-white'}`}
            >
              Réalisations
            </button>
            <button
              onClick={() => scrollTo('testimonials')}
              className={`hover:text-primary transition-colors ${isScrolled ? 'text-black' : 'text-white'}`}
            >
              Témoignages
            </button>
            <button
              onClick={() => scrollTo('contact')}
              className="bg-primary text-white px-4 py-2 rounded-md hover:bg-primary-light transition-colors"
            >
              Demander un devis
            </button>
          </nav>
          {/* Mobile Navigation Toggle */}
          <button
            className={`md:hidden ${isScrolled ? 'text-black' : 'text-white'}`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white absolute top-full left-0 right-0 shadow-lg py-4">
            <div className="flex flex-col space-y-3 px-4">
              <button
                onClick={() => scrollTo('services')}
                className="text-gray-700 hover:text-primary py-2 transition-colors"
              >
                Services
              </button>
              <button
                onClick={() => scrollTo('pricing')}
                className="text-gray-700 hover:text-primary py-2 transition-colors"
              >
                Forfaits
              </button>
              <button
                onClick={() => scrollTo('portfolio')}
                className="text-gray-700 hover:text-primary py-2 transition-colors"
              >
                Réalisations
              </button>
              <button
                onClick={() => scrollTo('testimonials')}
                className="text-gray-700 hover:text-primary py-2 transition-colors"
              >
                Témoignages
              </button>
              <button
                onClick={() => scrollTo('contact')}
                className="bg-primary text-white px-4 py-2 rounded-md hover:bg-primary-light transition-colors"
              >
                Demander un devis
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
