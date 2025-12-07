import React from 'react'
import { motion } from 'framer-motion'
import { fadeInUp, fadeInLeft, fadeInRight, staggerContainer, staggerItem } from '../utils'

interface ExperienceItem {
  id: string
  title: string
  company: string
  period: string
  description: string
  technologies: string[]
  achievements: string[]
  type: 'work' | 'education' | 'certification'
  certificateImage?: string
}

const Experience = () => {
  const experiences: ExperienceItem[] = [

    {
      id: '2',
      title: 'Web Development Intern',
      company: 'Prodigy InfoTech',
      period: 'May 2025',
      description: 'Completed a 1-month internship focusing on web design, coding, and debugging under expert guidance.',
      technologies: ['HTML', 'CSS', 'JavaScript', 'Web Design'],
      achievements: [
        'Completed 1-month internship focusing on web design and coding',
        'Implemented responsive designs using HTML, CSS, and JavaScript',
        'Worked under expert guidance for professional development'
      ],
      type: 'certification',
      certificateImage: '/images/certificate-3.jpg'
    },
    {
      id: '3',
      title: 'Cybersecurity Security Analyst Job Simulation',
      company: 'Tata Consultancy Services (Forage)',
      period: 'Nov 2024 - Dec 2024',
      description: 'Completed a job simulation involving identity and access management (IAM) for Tata Consultancy Services.',
      technologies: ['Cybersecurity', 'IAM', 'Security Analysis'],
      achievements: [
        'Completed Tata Cybersecurity Security Analyst Job Simulation',
        'Collaborated with Cybersecurity Consulting team',
        'Gained experience in identity and access management'
      ],
      type: 'work'
    },
    {
      id: '4',
      title: 'B.Tech Computer Science & Engineering',
      company: 'Centurion University of Technology and Management',
      period: '2023 - 2027',
      description: 'Currently pursuing Bachelor of Technology in Computer Science & Engineering with focus on web development and AI.',
      technologies: ['Java', 'Python', 'C Programming', 'Data Structures', 'Web Development'],
      achievements: [
        'Currently pursuing B.Tech in CSE (2023-2027)',
        'Active in hackathons and technical competitions',
        'Won 1st place in college hackathon for AI-powered e-commerce platform'
      ],
      type: 'education'
    },
    // Certifications Section
    {
      id: '5',
      title: 'Hackathon Winner',
      company: '',
      period: 'Aug 2025',
      description: 'Award-winning developer recognized for building an innovative project during a university-level hackathon. Competed against multiple campus teams and secured first place as part of Team HackStorm.',
      technologies: ['Python', 'Django', 'Flask', 'Data Structures', 'Algorithms'],
      achievements: [
        '🏆 Winner of University-Level Hackathon (Team HackStorm)',
        'Built a complete functional solution within limited time',
        'Integrated RESTful APIs and database modules efficiently',
        'Collaborated with team members for real-time problem solving'

      ],
      type: 'certification',
      certificateImage: '/images/certificate-1.jpg'
    },
    {
      id: '6',
      title: 'Web Development',
      company: 'Campus Technology',
      period: 'July 2025',
      description: 'Comprehensive certification covering HTML, CSS, JavaScript, and responsive web design principles.',
      technologies: ['HTML5', 'CSS3', 'JavaScript', 'Responsive Design', 'Accessibility'],
      achievements: [
        'Completed responsive web design certification',
        'Built mobile-first, accessible web applications',
        'Mastered CSS Grid and Flexbox layouts',
        'Implemented modern web design principles'
      ],
      type: 'certification',
      certificateImage: '/images/certificate-2.jpg'
    },
    {
      id: '7',
      title: 'Data Structures and Algorithms',
      company: '',
      period: 'Oct 2024',
      description: 'Advanced certification covering fundamental computer science concepts, data structures, and algorithmic problem solving.',
      technologies: ['Algorithms', 'Data Structures', 'Problem Solving', 'C++', 'Java'],
      achievements: [
        'Mastered fundamental data structures and algorithms',
        'Solved complex algorithmic problems',
        'Implemented efficient sorting and searching algorithms',
        'Developed strong problem-solving skills'
      ],
      type: 'education',
     
    }
  ]

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'work':
        return '💼'
      case 'education':
        return '🎓'
      case 'certification':
        return '🏆'
      default:
        return '📋'
    }
  }

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'work':
        return 'neonCyan'
      case 'education':
        return 'mutedViolet'
      case 'certification':
        return 'neonPink'
      default:
        return 'gray'
    }
  }

  return (
    <section id="experience" className="section bg-gradient-to-b from-softSlate/30 to-transparent min-h-screen">
      <div className="container-custom">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="text-center mb-16"
        >
          <motion.h2 variants={staggerItem} className="section-title text-softWhite drop-shadow-glow">
            Experience, Education & Certifications
          </motion.h2>
          <motion.p variants={staggerItem} className="section-subtitle text-softWhite/95 font-medium tracking-wide mx-auto">
            My professional journey, education, certifications, and continuous learning path.
          </motion.p>
        </motion.div>

        {/* Screenshot Image */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="mb-16 flex justify-center"
        >
          <div className="relative group">
            <img
              src="/images/screenshot-experience.png"
              alt="Experience Section Screenshot"
              className="rounded-xl shadow-2xl max-w-5xl w-full border-2 border-neonCyan/30 hover:border-neonCyan transition-all duration-300 hover:scale-[1.02]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-xl pointer-events-none"></div>
          </div>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="space-y-8"
          >
            {experiences.map((experience, index) => (
              <motion.div
                key={experience.id}
                variants={fadeInUp}
                className="glass rounded-xl p-6 hover:scale-105 transition-transform duration-300"
              >
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 rounded-full flex items-center justify-center text-xl glass border-2 border-neonCyan/30">
                      {getTypeIcon(experience.type)}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-softWhite mb-1">
                        {experience.title}
                      </h3>
                      <p className="text-neonCyan font-medium">
                        {experience.company}
                      </p>
                    </div>
                  </div>
                  <div className="mt-2 md:mt-0">
                    <span className="px-3 py-1 bg-gray-700/50 text-gray-300 text-sm rounded-full">
                      {experience.period}
                    </span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-300 mb-4 leading-relaxed">
                  {experience.description}
                </p>

                {/* Technologies */}
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-400 mb-2">Technologies:</h4>
                  <div className="flex flex-wrap gap-2">
                    {experience.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-gray-700/50 text-gray-300 text-xs rounded-md"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Achievements */}
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-400 mb-2">Key Achievements:</h4>
                  <ul className="space-y-1">
                    {experience.achievements.map((achievement, achIndex) => (
                      <li key={achIndex} className="flex items-start space-x-2 text-sm text-gray-300">
                        <div className="w-1.5 h-1.5 bg-neonCyan rounded-full mt-2 flex-shrink-0" />
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Certificate Image */}
                {experience.certificateImage && (
                  <div className="mt-4">
                    <h4 className="text-sm font-semibold text-gray-400 mb-2">Certificate:</h4>
                    <div className="relative group cursor-pointer inline-block">
                      <img
                        src={experience.certificateImage}
                        alt={`${experience.title} Certificate`}
                        className="w-full max-w-xs rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
                      />
                      <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 rounded-lg flex items-center justify-center">
                        <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-sm font-medium">
                          Click to view
                        </span>
                      </div>
                    </div>
                  </div>
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Skills Summary */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="mt-20"
        >
          <motion.div variants={staggerItem} className="text-center mb-12">
            <h3 className="text-3xl font-bold font-poppins text-softWhite mb-4">
              Professional Summary
            </h3>
            <p className="text-gray-300 max-w-3xl mx-auto">
              Over the years, I've developed expertise in modern web technologies and gained valuable experience 
              in building scalable, performant applications that deliver exceptional user experiences.
            </p>
          </motion.div>

          <motion.div
            variants={staggerItem}
            className="grid md:grid-cols-3 gap-8"
          >
            <motion.div variants={fadeInUp} className="text-center p-6 glass rounded-xl">
              <div className="text-4xl mb-4">🚀</div>
              <h4 className="text-xl font-semibold text-softWhite mb-3">Performance Focus</h4>
              <p className="text-gray-300 text-sm">
                Optimizing applications for speed, efficiency, and scalability across all platforms.
              </p>
            </motion.div>

            <motion.div variants={fadeInUp} className="text-center p-6 glass rounded-xl">
              <div className="text-4xl mb-4">🎨</div>
              <h4 className="text-xl font-semibold text-softWhite mb-3">Creative Solutions</h4>
              <p className="text-gray-300 text-sm">
                Combining technical expertise with creative vision to build innovative digital experiences.
              </p>
            </motion.div>

            <motion.div variants={fadeInUp} className="text-center p-6 glass rounded-xl">
              <div className="text-4xl mb-4">📈</div>
              <h4 className="text-xl font-semibold text-softWhite mb-3">Continuous Learning</h4>
              <p className="text-gray-300 text-sm">
                Staying up-to-date with the latest technologies and best practices in web development.
              </p>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Experience
