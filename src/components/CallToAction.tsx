import React from 'react'
import { ArrowRight } from 'lucide-react'

const CallToAction = () => {
  return (
    <section className="bg-gradient-primary text-white py-20">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Supercharge Your Development?</h2>
        <p className="text-xl mb-8">Join thousands of developers who are already using Mockabase to streamline their workflow.</p>
        <a href="#" className="inline-flex items-center bg-white text-primary font-semibold py-3 px-6 rounded-lg hover:bg-gray-100 transition duration-300">
          Start Your Free Trial
          <ArrowRight className="ml-2 w-5 h-5" />
        </a>
      </div>
    </section>
  )
}

export default CallToAction