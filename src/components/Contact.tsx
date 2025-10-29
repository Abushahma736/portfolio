import React from 'react'
import { motion } from 'framer-motion'
import { staggerContainer, staggerItem } from '../utils'
import ContactForm from './ContactForm'

const Contact = () => {
  return (
    <section id="contact" className="section bg-gradient-to-b from-transparent to-softSlate/50">
      <div className="container-custom">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mb-16"
        >
          <motion.h2 variants={staggerItem} className="section-title gradient-text">
            Let's Work Together
          </motion.h2>
          <motion.p variants={staggerItem} className="section-subtitle">
            Ready to bring your ideas to life? I'd love to hear about your project and discuss how we can create something amazing together.
          </motion.p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <ContactForm />
        </motion.div>

        {/* Additional CTA */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="mt-20 text-center"
        >
          <motion.div variants={staggerItem} className="p-8 glass rounded-2xl max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-softWhite mb-4">
              Prefer a Quick Chat?
            </h3>
            <p className="text-gray-300 mb-6">
              Sometimes a quick conversation is the best way to get started. 
              I'm available for a 15-minute discovery call to discuss your project.
            </p>
            <motion.a
              href="https://calendly.com/yourname/15min"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary inline-flex items-center space-x-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <span>Schedule a Call</span>
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact
