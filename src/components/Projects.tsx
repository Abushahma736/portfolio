import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { fadeInUp, staggerContainer, staggerItem } from '../utils'
import ProjectCard from './ProjectCard'
import ProjectModal from './ProjectModal'

interface Project {
  id: string
  title: string
  description: string
  image: string
  technologies: string[]
  liveUrl?: string
  githubUrl?: string
  category: string
  featured: boolean
  longDescription?: string
  challenges?: string[]
  features?: string[]
}

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [activeFilter, setActiveFilter] = useState('all')

  // Abu Shahma's actual projects
  const projects: Project[] = [
    {
      id: '1',
      title: 'ESSE Naturals Nutrition - AI Powered E-Commerce',
      description: 'Hackathon-winning AI-powered e-commerce platform with automated content generation and recommendation engine.',
      image: 'https://placehold.co/600x400',
      technologies: ['Flask', 'Google Gemini AI', 'Hugging Face', 'MongoDB', 'Python', 'scikit-learn'],
      liveUrl: '#',
      githubUrl: '#',
      category: 'AI/ML',
      featured: true,
      longDescription: 'Developed an innovative e-commerce platform that won 1st place in college hackathon. Features AI-powered product descriptions, automated image captioning, and collaborative filtering recommendation engine.',
      features: [
        'AI-powered product description generation using Google Gemini 2.0 Flash',
        'Automated image captioning with Hugging Face BLIP',
        'Collaborative filtering recommendation engine with scikit-learn',
        '17 operational REST API endpoints with Flask',
        'MongoDB data storage with model persistence',
        'Automated content management and SEO optimization'
      ],
      challenges: [
        'Integrating multiple AI services for seamless content generation',
        'Building scalable recommendation system with limited data',
        'Optimizing AI responses for e-commerce product descriptions'
      ]
    },
    {
      id: '2',
      title: 'IIoT-Based Weather Station',
      description: 'Smart weather monitoring system using IoT sensors with real-time cloud visualization and alerts.',
      image: 'https://placehold.co/600x400',
      technologies: ['NodeMCU', 'DHT11', 'BMP180', 'MQTT', 'ThingSpeak', 'IoT'],
      liveUrl: '#',
      githubUrl: '#',
      category: 'IoT',
      featured: true,
      longDescription: 'Built an Industrial Internet of Things (IIoT) weather station using NodeMCU, DHT11, and BMP180 sensors to monitor temperature, humidity, and pressure with real-time cloud visualization.',
      features: [
        'Real-time temperature, humidity, and pressure monitoring',
        'MQTT protocol for reliable data transmission',
        'ThingSpeak cloud integration for data visualization',
        'Automated alerts and notifications',
        'Remote monitoring capabilities'
      ],
      challenges: [
        'Ensuring reliable data transmission in varying network conditions',
        'Optimizing sensor readings for accuracy and efficiency',
        'Integrating multiple data sources into unified dashboard'
      ]
    },
    {
      id: '3',
      title: 'Food court (A Single Restaurant Website,Domain Project)',
      description: 'This project is a single-restaurant Food Court website developed using Angular for the frontend, Spring Boot for the backend, and MySQL as the database. The system includes two separate portals: an Admin Portal for managing menu items, orders, and user data, and a User Portal for browsing the menu and placing orders. Both portals are fully authenticated, ensuring secure access and efficient data handling by the admin. The application delivers a smooth, responsive, and user-friendly experience across all devices.',
      image: 'https://placehold.co/600x400',
      technologies: ['HTML', 'CSS', 'JavaScript', 'MySQL','Angular','SpringBoot'],
      liveUrl: '#',
      githubUrl: '#',
      category: 'Web Development',
      featured: false,
      longDescription: 'This project is a single-restaurant Food Court website developed using Angular for the frontend, Spring Boot for the backend, and MySQL as the database. The system includes two separate portals: an Admin Portal for managing menu items, orders, and user data, and a User Portal for browsing the menu and placing orders. Both portals are fully authenticated, ensuring secure access and efficient data handling by the admin. The application delivers a smooth, responsive, and user-friendly experience across all devices.',
      features: [
        'Interactive menu with dynamic content',
        'User can directly order food from his table without waiting fir the Waiter',
        'Contact and booking forms',
        'Responsive design for all devices',
        'User-friendly UI/UX design'
      ],
      challenges: [
        'Creating intuitive navigation for restaurant information',
        'Optimizing image loading for better performance',
        'Implementing responsive design across different screen sizes'
      ]
    },
    {
      id: '4',
      title: 'FTL Website (University Project)',
      description: 'University website focusing on user-friendly design and smooth performance with front-end and back-end integration.',
      image: 'https://placehold.co/600x400',
      technologies: ['HTML', 'CSS', 'JavaScript', 'Backend Integration'],
      liveUrl: '#',
      githubUrl: '#',
      category: 'Web Development',
      featured: false,
      longDescription: 'Built and deployed the FTL Website for university use, focusing on user-friendly design and smooth performance with proper front-end and back-end integration.',
      features: [
        'User-friendly interface design',
        'Smooth performance optimization',
        'Front-end and back-end integration',
        'Collaborative development approach',
        'Faculty and team collaboration'
      ],
      challenges: [
        'Coordinating with multiple team members and faculty',
        'Ensuring proper functionality across different user types',
        'Balancing design aesthetics with performance requirements'
      ]
    }
  ]

  const categories = ['all', ...Array.from(new Set(projects.map(p => p.category)))]
  
  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter)

  const handleOpenModal = (project: Project) => {
    setSelectedProject(project)
    setIsModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
    setSelectedProject(null)
  }

  return (
    <section id="projects" className="section bg-gradient-to-b from-transparent to-softSlate/30">
      <div className="container-custom">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mb-16"
        >
          <motion.h2 variants={staggerItem} className="section-title gradient-text">
            Featured Projects
          </motion.h2>
          <motion.p variants={staggerItem} className="section-subtitle">
            A showcase of my recent work, featuring innovative solutions and cutting-edge technologies.
          </motion.p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              variants={staggerItem}
              onClick={() => setActiveFilter(category)}
              className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                activeFilter === category
                  ? 'bg-neonCyan text-deepCharcoal shadow-glow'
                  : 'glass text-gray-300 hover:text-neonCyan hover:bg-white/10'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              variants={staggerItem}
              className={project.featured ? 'md:col-span-2 lg:col-span-1' : ''}
            >
              <ProjectCard
                project={project}
                onOpenModal={handleOpenModal}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mt-16"
        >
          <motion.div variants={staggerItem} className="space-y-6">
            <h3 className="text-2xl font-semibold text-softWhite">
              Interested in working together?
            </h3>
            <p className="text-gray-300 max-w-2xl mx-auto">
              I'm always excited to take on new challenges and create amazing digital experiences. 
              Let's discuss your next project!
            </p>
            <motion.button
              className="btn-primary text-lg px-8 py-4"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                const element = document.getElementById('contact')
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' })
                }
              }}
            >
              Start a Project
            </motion.button>
          </motion.div>
        </motion.div>
      </div>

      {/* Project Modal */}
      <ProjectModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </section>
  )
}

export default Projects
