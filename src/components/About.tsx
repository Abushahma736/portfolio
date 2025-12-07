import React from 'react'
import { motion } from 'framer-motion'
import { fadeInUp, fadeInLeft, fadeInRight, staggerContainer, staggerItem } from '../utils'

const About = () => {
  const stats = [
    { label: 'Projects Completed', value: '4+' },
    { label: 'Internships', value: '3' },
    { label: 'Technologies', value: '8+' },
    { label: 'Hackathon Winner', value: '1st' },
  ]

  const skills = [
    { name: 'HTML/CSS', level: 90 },
    { name: 'JavaScript', level: 85 },
    { name: 'Java', level: 80 },
    { name: 'Python', level: 75 },
    { name: 'C Programming', level: 70 },
    { name: 'Data Structures', level: 75 },
  ]

  return (
    <section id="about" className="section bg-gradient-to-b from-transparent to-softSlate/50">
      <div className="container-custom">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mb-16"
        >
          <motion.h2 variants={staggerItem} className="section-title gradient-text">
            About Me
          </motion.h2>
          <motion.p variants={staggerItem} className="section-subtitle">
            Passionate about creating immersive digital experiences that blend creativity with cutting-edge technology.
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Content */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="space-y-8"
          >
            <motion.div variants={staggerItem} className="space-y-6">
              <motion.p
                variants={fadeInUp}
                className="text-lg text-gray-300 leading-relaxed"
              >
                I'm a <span className="gradient-text font-semibold">Computer Science student</span> at Centurion University 
                with a passion for web development and innovative technology solutions. Currently pursuing B.Tech in CSE (2023-2027), 
                I have gained hands-on experience through multiple internships and hackathon-winning projects.
              </motion.p>
              
              <motion.p
                variants={fadeInUp}
                className="text-lg text-gray-300 leading-relaxed"
              >
                My expertise spans across <span className="gradient-text-pink font-semibold">web development,Full stack development</span>. 
                I've successfully completed internships at Campus Technology and Prodigy InfoTech, and won 1st place in a college hackathon 
                for developing FTL Website .
              </motion.p>
            </motion.div>

            {/* Stats Grid */}
            <motion.div
              variants={staggerItem}
              className="grid grid-cols-2 gap-6"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  variants={fadeInUp}
                  className="text-center p-6 glass rounded-xl hover:scale-105 transition-transform duration-300"
                  whileHover={{ y: -5 }}
                >
                  <div className="text-3xl font-bold gradient-text mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-400">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Button */}
            <motion.div variants={staggerItem}>
              <motion.button
                className="btn-primary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Download Resume
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Right Column - Skills Visualization */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="space-y-8"
          >
            <motion.h3
              variants={staggerItem}
              className="text-2xl font-bold font-poppins text-softWhite mb-8"
            >
              Core Skills
            </motion.h3>

            <div className="space-y-6">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  variants={fadeInRight}
                  className="space-y-2"
                >
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300 font-medium">{skill.name}</span>
                    <span className="text-neonCyan font-semibold">{skill.level}%</span>
                  </div>
                  
                  <div className="w-full bg-gray-700 rounded-full h-2 overflow-hidden">
                    <motion.div
                      className="h-full bg-gradient-to-r from-neonCyan to-mutedViolet rounded-full"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 1.5,
                        delay: index * 0.1,
                        ease: [0.6, -0.05, 0.01, 0.99]
                      }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Additional Info */}
            <motion.div
              variants={staggerItem}
              className="p-6 glass rounded-xl space-y-4"
            >
              <h4 className="text-lg font-semibold text-softWhite">What I Do</h4>
              <div className="grid grid-cols-2 gap-4 text-sm text-gray-300">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-neonCyan rounded-full" />
                  <span>3D Web Development</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-mutedViolet rounded-full" />
                  <span>Performance Optimization</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-neonCyan rounded-full" />
                  <span>Interactive Design</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-mutedViolet rounded-full" />
                  <span>Mobile-First Development</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About
