import React from 'react'
import { motion } from 'framer-motion'
import { fadeInUp, staggerContainer, staggerItem } from '../utils'

interface SkillProps {
  name: string
  percentage: number
  color: string
  icon: string
  delay: number
}

const SkillCircle = ({ name, percentage, color, icon, delay }: SkillProps) => {
  const radius = 80
  const circumference = 2 * Math.PI * radius
  const strokeDasharray = circumference
  const strokeDashoffset = circumference - (percentage / 100) * circumference

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      className="relative w-48 h-48 mx-auto group"
      whileHover={{ scale: 1.05 }}
    >
      {/* Background Circle */}
      <svg className="w-full h-full transform -rotate-90" viewBox="0 0 200 200">
        <circle
          cx="100"
          cy="100"
          r={radius}
          stroke="currentColor"
          strokeWidth="8"
          fill="none"
          className="text-gray-700"
        />
        
        {/* Progress Circle */}
        <motion.circle
          cx="100"
          cy="100"
          r={radius}
          stroke={color}
          strokeWidth="8"
          fill="none"
          strokeLinecap="round"
          strokeDasharray={strokeDasharray}
          initial={{ strokeDashoffset: circumference }}
          whileInView={{ strokeDashoffset }}
          viewport={{ once: true }}
          transition={{ duration: 2, delay, ease: "easeInOut" }}
          className="drop-shadow-lg"
          style={{
            filter: `drop-shadow(0 0 10px ${color}40)`
          }}
        />
      </svg>

      {/* Center Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <div className="text-4xl mb-2 group-hover:scale-110 transition-transform duration-300">
          {icon}
        </div>
        <div className="text-2xl font-bold text-softWhite">
          {percentage}%
        </div>
        <div className="text-sm text-gray-400 text-center">
          {name}
        </div>
      </div>

      {/* Hover Glow Effect */}
      <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
           style={{
             background: `radial-gradient(circle, ${color}20 0%, transparent 70%)`
           }}
      />
    </motion.div>
  )
}

const Skills = () => {
  const skills = [
    {
      name: 'HTML/CSS',
      percentage: 90,
      color: '#00E5C4',
      icon: '🌐',
      delay: 0
    },
    {
      name: 'JavaScript',
      percentage: 85,
      color: '#8B5CF6',
      icon: '⚡',
      delay: 0.1
    },
    {
      name: 'Java',
      percentage: 80,
      color: '#3B82F6',
      icon: '☕',
      delay: 0.2
    },
    {
      name: 'Python',
      percentage: 75,
      color: '#10B981',
      icon: '🐍',
      delay: 0.3
    },
    {
      name: 'C Programming',
      percentage: 70,
      color: '#F59E0B',
      icon: '🔧',
      delay: 0.4
    },
    {
      name: 'Data Structures',
      percentage: 75,
      color: '#EC4899',
      icon: '📊',
      delay: 0.5
    }
  ]

  const technologies = [
    { name: 'HTML', category: 'Frontend' },
    { name: 'CSS', category: 'Frontend' },
    { name: 'JavaScript', category: 'Frontend' },
    { name: 'Java', category: 'Backend' },
    { name: 'SpringBoot', category: 'Backend' },
    { name: 'C Programming', category: 'System' },
    { name: 'Data Structures', category: 'Algorithm' },
    { name: 'Problem Solving', category: 'Skills' },
    { name: 'Project Management', category: 'Management' },
    { name: 'MySQL', category: 'Database' },
    { name: 'MongoDB', category: 'Database' },
    { name: 'Angular', category: 'Frontend' },
    { name: 'prompt', category: 'AI Tool Handling' },
    { name: 'pandas', category: 'Data Science' },
    { name: 'numpy', category: 'Data Science' },
    { name: 'Git', category: 'Tools' }
  ]

  return (
    <section id="skills" className="section bg-gradient-to-b from-softSlate/50 to-transparent">
      <div className="container-custom">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mb-16"
        >
          <motion.h2 variants={staggerItem} className="section-title gradient-text">
            Skills & Expertise
          </motion.h2>
          <motion.p variants={staggerItem} className="section-subtitle">
            A comprehensive overview of my technical skills and the technologies I work with.
          </motion.p>
        </motion.div>

        {/* Circular Skills */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mb-20"
        >
          {skills.map((skill) => (
            <motion.div key={skill.name} variants={staggerItem}>
              <SkillCircle {...skill} />
            </motion.div>
          ))}
        </motion.div>

        {/* Technology Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="space-y-12"
        >
          <motion.div variants={staggerItem} className="text-center">
            <h3 className="text-3xl font-bold font-poppins text-softWhite mb-4">
              Technology Stack
            </h3>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Here's a comprehensive list of technologies and tools I've worked with throughout my career.
            </p>
          </motion.div>

          <motion.div
            variants={staggerItem}
            className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4"
          >
            {technologies.map((tech, index) => (
              <motion.div
                key={tech.name}
                variants={fadeInUp}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="group"
              >
                <div className="p-4 glass rounded-lg text-center hover:scale-105 transition-all duration-300 cursor-pointer group-hover:shadow-glow">
                  <div className="text-sm font-medium text-softWhite group-hover:text-neonCyan transition-colors duration-300">
                    {tech.name}
                  </div>
                  <div className="text-xs text-gray-400 mt-1">
                    {tech.category}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Additional Skills Section */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="mt-20 grid md:grid-cols-3 gap-8"
        >
          <motion.div variants={staggerItem} className="p-6 glass rounded-xl">
            <div className="text-2xl mb-4">🎨</div>
            <h4 className="text-xl font-semibold text-softWhite mb-3">Design & UX</h4>
            <p className="text-gray-300 text-sm">
              Creating intuitive user experiences with modern design principles and accessibility in mind.
            </p>
          </motion.div>

          <motion.div variants={staggerItem} className="p-6 glass rounded-xl">
            <div className="text-2xl mb-4">⚡</div>
            <h4 className="text-xl font-semibold text-softWhite mb-3">Performance</h4>
            <p className="text-gray-300 text-sm">
              Optimizing applications for speed, efficiency, and scalability across all devices and platforms.
            </p>
          </motion.div>

          <motion.div variants={staggerItem} className="p-6 glass rounded-xl">
            <div className="text-2xl mb-4">🔧</div>
            <h4 className="text-xl font-semibold text-softWhite mb-3">DevOps & Tools</h4>
            <p className="text-gray-300 text-sm">
              Streamlining development workflows with modern CI/CD practices and cloud deployment strategies.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills
