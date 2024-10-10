import React from 'react'
import { Link, Database, Sparkles } from 'lucide-react'

const steps = [
  {
    icon: <Link className="w-12 h-12 text-primary" />,
    title: 'Connect',
    description: 'Link your Supabase backend to Mockabase with a simple API key.'
  },
  {
    icon: <Database className="w-12 h-12 text-primary" />,
    title: 'Configure',
    description: 'Specify your data requirements and table structures.'
  },
  {
    icon: <Sparkles className="w-12 h-12 text-primary" />,
    title: 'Generate',
    description: 'Let our AI create realistic mock data tailored to your needs.'
  }
]

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">How Mockabase Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="mb-4 inline-block">{step.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default HowItWorks