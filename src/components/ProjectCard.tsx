import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { fadeInUp, hoverScale, hoverTilt } from '../utils'

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
}

interface ProjectCardProps {
  project: Project
  onOpenModal: (project: Project) => void
}

const ProjectCard = ({ project, onOpenModal }: ProjectCardProps) => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      variants={fadeInUp}
      className="group perspective-1000"
      whileHover={{ y: -10 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <div className="relative h-full">
        {/* Card Container */}
        <motion.div
          className="h-full glass rounded-xl overflow-hidden cursor-pointer preserve-3d"
          style={{
            transform: isHovered 
              ? `perspective(1000px) rotateX(${hoverTilt}deg) rotateY(${hoverTilt}deg)` 
              : 'perspective(1000px) rotateX(0deg) rotateY(0deg)'
          }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          onClick={() => onOpenModal(project)}
        >
          {/* Image Container */}
          <div className="relative h-48 overflow-hidden">
            <motion.img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover transition-transform duration-500"
              style={{
                transform: isHovered ? 'scale(1.1)' : 'scale(1)'
              }}
            />
            
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            
            {/* Category Badge */}
            <div className="absolute top-4 left-4">
              <span className="px-3 py-1 bg-neonCyan/20 backdrop-blur-sm text-neonCyan text-xs font-medium rounded-full border border-neonCyan/30">
                {project.category}
              </span>
            </div>

            {/* Featured Badge */}
            {project.featured && (
              <div className="absolute top-4 right-4">
                <span className="px-3 py-1 bg-mutedViolet/20 backdrop-blur-sm text-mutedViolet text-xs font-medium rounded-full border border-mutedViolet/30">
                  Featured
                </span>
              </div>
            )}

            {/* Hover Actions */}
            <motion.div
              className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              initial={{ scale: 0.8 }}
              whileHover={{ scale: 1 }}
            >
              <div className="flex space-x-4">
                <motion.button
                  className="p-3 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-neonCyan transition-colors duration-300"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={(e) => {
                    e.stopPropagation()
                    onOpenModal(project)
                  }}
                  aria-label={`View details for ${project.title}`}
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </motion.button>
                
                {project.liveUrl && (
                  <motion.a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-mutedViolet transition-colors duration-300"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={(e) => e.stopPropagation()}
                    aria-label={`Visit live site for ${project.title}`}
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </motion.a>
                )}
              </div>
            </motion.div>
          </div>

          {/* Content */}
          <div className="p-6 space-y-4">
            <div>
              <h3 className="text-xl font-semibold text-softWhite mb-2 group-hover:text-neonCyan transition-colors duration-300">
                {project.title}
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed line-clamp-3">
                {project.description}
              </p>
            </div>

            {/* Technologies */}
            <div className="flex flex-wrap gap-2">
              {project.technologies.slice(0, 3).map((tech) => (
                <span
                  key={tech}
                  className="px-2 py-1 bg-gray-700/50 text-gray-300 text-xs rounded-md"
                >
                  {tech}
                </span>
              ))}
              {project.technologies.length > 3 && (
                <span className="px-2 py-1 bg-gray-700/50 text-gray-300 text-xs rounded-md">
                  +{project.technologies.length - 3}
                </span>
              )}
            </div>

            {/* Links */}
            <div className="flex justify-between items-center pt-2">
              <div className="flex space-x-3">
                {project.githubUrl && (
                  <motion.a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-neonCyan transition-colors duration-300"
                    whileHover={{ scale: 1.1 }}
                    onClick={(e) => e.stopPropagation()}
                    aria-label={`View source code for ${project.title}`}
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                  </motion.a>
                )}
                
                {project.liveUrl && (
                  <motion.a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-mutedViolet transition-colors duration-300"
                    whileHover={{ scale: 1.1 }}
                    onClick={(e) => e.stopPropagation()}
                    aria-label={`Visit live site for ${project.title}`}
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </motion.a>
                )}
              </div>

              <motion.button
                className="text-neonCyan hover:text-neonCyan/80 transition-colors duration-300 text-sm font-medium"
                whileHover={{ x: 5 }}
                onClick={(e) => {
                  e.stopPropagation()
                  onOpenModal(project)
                }}
              >
                View Details →
              </motion.button>
            </div>
          </div>
        </motion.div>

        {/* Glow Effect */}
        <div 
          className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
          style={{
            background: `radial-gradient(circle at center, ${isHovered ? '#00E5C4' : '#8B5CF6'}20 0%, transparent 70%)`
          }}
        />
      </div>
    </motion.div>
  )
}

export default ProjectCard
