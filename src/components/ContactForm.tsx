import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { useForm } from 'react-hook-form'
import { fadeInUp, staggerContainer, staggerItem } from '../utils'

interface ContactFormData {
  name: string
  email: string
  subject: string
  message: string
}

const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [submitError, setSubmitError] = useState('')

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<ContactFormData>()

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true)
    setSubmitError('')

    try {
      // Simulate API call - replace with your actual endpoint
      await new Promise(resolve => setTimeout(resolve, 2000))
      
      // Here you would typically send the data to your backend
      console.log('Form data:', data)
      
      setIsSubmitted(true)
      reset()
    } catch (error) {
      setSubmitError('Failed to send message. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const contactInfo = [
    {
      icon: '📧',
      label: 'Email',
      value: 'abushama111225@gmail.com',
      href: 'mailto:abushama111225@gmail.com'
    },
    {
      icon: '📱',
      label: 'Phone',
      value: '+91 7488787722',
      href: 'tel:+917488787722'
    },
    {
      icon: '📍',
      label: 'Location',
      value: 'Delhi, India',
      href: '#'
    },
    {
      icon: '🎓',
      label: 'University',
      value: 'Centurion University',
      href: '#'
    }
  ]

  if (isSubmitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center py-20"
      >
        <div className="max-w-md mx-auto">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
            className="w-20 h-20 bg-neonCyan/20 rounded-full flex items-center justify-center mx-auto mb-6"
          >
            <svg className="w-10 h-10 text-neonCyan" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </motion.div>
          
          <h3 className="text-2xl font-bold text-softWhite mb-4">
            Message Sent Successfully!
          </h3>
          <p className="text-gray-300 mb-6">
            Thank you for reaching out. I'll get back to you within 24 hours.
          </p>
          
          <motion.button
            onClick={() => setIsSubmitted(false)}
            className="btn-secondary"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Send Another Message
          </motion.button>
        </div>
      </motion.div>
    )
  }

  return (
    <div className="grid lg:grid-cols-2 gap-12">
      {/* Contact Information */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="space-y-8"
      >
        <motion.div variants={staggerItem}>
          <h3 className="text-2xl font-bold font-poppins text-softWhite mb-4">
            Get In Touch
          </h3>
          <p className="text-gray-300 leading-relaxed">
            I'm always excited to work on new projects and collaborate with amazing people. 
            Whether you have a question, want to discuss a project, or just want to say hi, 
            feel free to reach out!
          </p>
        </motion.div>

        <motion.div variants={staggerItem} className="space-y-4">
          {contactInfo.map((info, index) => (
            <motion.a
              key={info.label}
              href={info.href}
              variants={fadeInUp}
              className="flex items-center space-x-4 p-4 glass rounded-lg hover:bg-white/5 transition-colors duration-300 group"
              whileHover={{ x: 5 }}
            >
              <div className="text-2xl group-hover:scale-110 transition-transform duration-300">
                {info.icon}
              </div>
              <div>
                <div className="text-sm text-gray-400">{info.label}</div>
                <div className="text-softWhite font-medium group-hover:text-neonCyan transition-colors duration-300">
                  {info.value}
                </div>
              </div>
            </motion.a>
          ))}
        </motion.div>

        {/* Social Links */}
        <motion.div variants={staggerItem} className="pt-8">
          <h4 className="text-lg font-semibold text-softWhite mb-4">Follow Me</h4>
          <div className="flex space-x-4">
            {[
              { name: 'GitHub', href: 'https://github.com/Abushahma736', icon: 'M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z' },
              { name: 'LinkedIn', href: 'https://www.linkedin.com/in/abu-shahma-3366aa2a6/', icon: 'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z' },
              { name: 'Twitter', href: '#', icon: 'M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z' },
              { name: 'Dribbble', href: '#', icon: 'M12 0C5.374 0 0 5.373 0 12s5.374 12 12 12 12-5.373 12-12S18.626 0 12 0zm6.568 8.16c-.169 1.858-.896 3.461-2.002 4.634-.896.896-1.858 1.623-2.967 2.002-.896.169-1.858.169-2.967 0-1.109-.379-2.071-1.106-2.967-2.002-1.106-1.173-1.833-2.776-2.002-4.634-.169-1.109-.169-2.071 0-2.967.169-1.858.896-3.461 2.002-4.634.896-.896 1.858-1.623 2.967-2.002 1.109-.169 1.858-.169 2.967 0 1.109.379 2.071 1.106 2.967 2.002 1.106 1.173 1.833 2.776 2.002 4.634.169 1.109.169 2.071 0 2.967z' }
            ].map((social) => (
              <motion.a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 glass rounded-lg hover:bg-neonCyan/10 transition-colors duration-300 group"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                aria-label={`Visit ${social.name} profile`}
              >
                <svg
                  className="w-6 h-6 text-gray-400 group-hover:text-neonCyan transition-colors duration-300"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d={social.icon} />
                </svg>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </motion.div>

      {/* Contact Form */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="space-y-6"
      >
        <motion.div variants={staggerItem}>
          <h3 className="text-2xl font-bold font-poppins text-softWhite mb-4">
            Send a Message
          </h3>
          <p className="text-gray-300">
            Have a project in mind? Let's discuss how we can bring your ideas to life.
          </p>
        </motion.div>

        <motion.form
          variants={staggerItem}
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-6"
        >
          <div className="grid md:grid-cols-2 gap-6">
            <motion.div variants={fadeInUp}>
              <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                Name *
              </label>
              <input
                {...register('name', { required: 'Name is required' })}
                type="text"
                id="name"
                className="w-full px-4 py-3 glass rounded-lg text-softWhite placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-neonCyan/50 transition-colors duration-300"
                placeholder="Your name"
              />
              {errors.name && (
                <p className="mt-1 text-sm text-red-400">{errors.name.message}</p>
              )}
            </motion.div>

            <motion.div variants={fadeInUp}>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                Email *
              </label>
              <input
                {...register('email', {
                  required: 'Email is required',
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: 'Invalid email address'
                  }
                })}
                type="email"
                id="email"
                className="w-full px-4 py-3 glass rounded-lg text-softWhite placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-neonCyan/50 transition-colors duration-300"
                placeholder="your@email.com"
              />
              {errors.email && (
                <p className="mt-1 text-sm text-red-400">{errors.email.message}</p>
              )}
            </motion.div>
          </div>

          <motion.div variants={fadeInUp}>
            <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
              Subject *
            </label>
            <input
              {...register('subject', { required: 'Subject is required' })}
              type="text"
              id="subject"
              className="w-full px-4 py-3 glass rounded-lg text-softWhite placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-neonCyan/50 transition-colors duration-300"
              placeholder="What's this about?"
            />
            {errors.subject && (
              <p className="mt-1 text-sm text-red-400">{errors.subject.message}</p>
            )}
          </motion.div>

          <motion.div variants={fadeInUp}>
            <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
              Message *
            </label>
            <textarea
              {...register('message', { required: 'Message is required' })}
              id="message"
              rows={6}
              className="w-full px-4 py-3 glass rounded-lg text-softWhite placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-neonCyan/50 transition-colors duration-300 resize-none"
              placeholder="Tell me about your project..."
            />
            {errors.message && (
              <p className="mt-1 text-sm text-red-400">{errors.message.message}</p>
            )}
          </motion.div>

          {submitError && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="p-4 bg-red-500/10 border border-red-500/20 rounded-lg"
            >
              <p className="text-red-400 text-sm">{submitError}</p>
            </motion.div>
          )}

          <motion.button
            type="submit"
            disabled={isSubmitting}
            className="w-full btn-primary text-lg py-4 disabled:opacity-50 disabled:cursor-not-allowed"
            whileHover={{ scale: isSubmitting ? 1 : 1.05 }}
            whileTap={{ scale: isSubmitting ? 1 : 0.95 }}
          >
            {isSubmitting ? (
              <div className="flex items-center justify-center space-x-2">
                <div className="loading-dots">
                  <div></div>
                  <div></div>
                  <div></div>
                </div>
                <span>Sending...</span>
              </div>
            ) : (
              'Send Message'
            )}
          </motion.button>
        </motion.form>
      </motion.div>
    </div>
  )
}

export default ContactForm
