import React from 'react'
import { Database, Twitter, Code, Linkedin } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <Database className="w-8 h-8 text-primary" />
            <span className="text-xl font-bold">Mockabase</span>
          </div>
          <nav className="mb-4 md:mb-0">
            <ul className="flex space-x-6">
              <li><a href="#" className="hover:text-primary">Home</a></li>
              <li><a href="#" className="hover:text-primary">Features</a></li>
              <li><a href="#" className="hover:text-primary">Pricing</a></li>
              <li><a href="#" className="hover:text-primary">Contact</a></li>
            </ul>
          </nav>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-primary"><Twitter className="w-6 h-6" /></a>
            <a href="#" className="hover:text-primary"><Code className="w-6 h-6" /></a>
            <a href="#" className="hover:text-primary"><Linkedin className="w-6 h-6" /></a>
          </div>
        </div>
        <div className="mt-8 text-center text-gray-400 text-sm">
          &copy; {new Date().getFullYear()} Mockabase. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

export default Footer