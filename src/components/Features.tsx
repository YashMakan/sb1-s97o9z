import React from 'react'
import { Zap, Shield, Cpu, RefreshCw } from 'lucide-react'

const features = [
  {
    icon: <Zap className="w-12 h-12 text-primary" />,
    title: 'Instant Mock Data',
    description: 'Generate realistic mock data for your Supabase backend in seconds.'
  },
  {
    icon: <Shield className="w-12 h-12 text-primary" />,
    title: 'Secure Integration',
    description: 'Safely connect to your Supabase environment with end-to-end encryption.'
  },
  {
    icon: <Cpu className="w-12 h-12 text-primary" />,
    title: 'AI-Powered',
    description: 'Leverage advanced AI to create contextually relevant and diverse datasets.'
  },
  {
    icon: <RefreshCw className="w-12 h-12 text-primary" />,
    title: 'Customizable Data',
    description: 'Tailor mock data to your specific needs with flexible configuration options.'
  }
]

const Features = () => {
  return (
    <section id="features" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Why Choose Mockabase?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center">
              <div className="mb-4 inline-block">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features