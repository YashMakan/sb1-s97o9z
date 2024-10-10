import React from 'react'
import { ArrowRight } from 'lucide-react'

const Hero = () => {
  return (
    <div className="bg-gradient-primary text-white py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Populate Your Supabase Backend with AI-Generated Mock Data</h1>
          <p className="text-xl mb-8">Mockabase connects your Supabase environment to automatically generate realistic mock data, saving you time and enhancing your development process.</p>
          <a href="#" className="inline-flex items-center bg-white text-primary font-semibold py-3 px-6 rounded-lg hover:bg-gray-100 transition duration-300">
            Get Started
            <ArrowRight className="ml-2 w-5 h-5" />
          </a>
        </div>
      </div>
    </div>
  )
}

export default Hero