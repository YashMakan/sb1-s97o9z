import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Database, Menu, X } from 'lucide-react'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-2">
            <Database className="w-8 h-8 text-primary" />
            <span className="text-xl font-bold text-gray-800">Mockabase</span>
          </Link>
          <nav className="hidden md:block">
            <ul className="flex space-x-6">
              <li><Link to="/" className="text-gray-600 hover:text-primary">Home</Link></li>
              <li><a href="#features" className="text-gray-600 hover:text-primary">Features</a></li>
              <li><a href="#how-it-works" className="text-gray-600 hover:text-primary">How It Works</a></li>
              <li><Link to="/contact" className="text-gray-600 hover:text-primary">Contact</Link></li>
            </ul>
          </nav>
          <div className="hidden md:block">
            <Link to="#" className="bg-gradient-primary text-white px-4 py-2 rounded-lg hover-gradient-primary transition duration-300">
              Get Started
            </Link>
          </div>
          <button className="md:hidden" onClick={toggleMenu}>
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden">
          <nav className="bg-white px-4 pt-2 pb-4 shadow-lg">
            <ul className="space-y-2">
              <li><Link to="/" className="block text-gray-600 hover:text-primary" onClick={toggleMenu}>Home</Link></li>
              <li><a href="#features" className="block text-gray-600 hover:text-primary" onClick={toggleMenu}>Features</a></li>
              <li><a href="#how-it-works" className="block text-gray-600 hover:text-primary" onClick={toggleMenu}>How It Works</a></li>
              <li><Link to="/contact" className="block text-gray-600 hover:text-primary" onClick={toggleMenu}>Contact</Link></li>
              <li>
                <Link to="#" className="block bg-gradient-primary text-white px-4 py-2 rounded-lg hover-gradient-primary transition duration-300 text-center" onClick={toggleMenu}>
                  Get Started
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </header>
  )
}

export default Header