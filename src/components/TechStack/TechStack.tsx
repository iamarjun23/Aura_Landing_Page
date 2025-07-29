'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'        // <-- Import here!
import styles from './TechStack.module.css'

const technologies = [
  { logo: '/google.svg', alt: 'Google logo', width: 100, height: 100 },
  { logo: '/OpenAI.svg', alt: 'OpenAI logo', width: 100, height: 100 },
  { logo: '/deepseek.svg', alt: 'DeepSeek logo', width: 100, height: 100 },
  { logo: '/Firebase.png', alt: 'Firebase logo', width: 100, height: 100 },
  { logo: '/OpenCV.png', alt: 'OpenCV logo', width: 100, height: 100 },
  { logo: '/python.png', alt: 'Python logo', width: 100, height: 100 },
  { logo: '/js.png', alt: 'JavaScript logo', width: 100, height: 100 },
]

const TechStack = () => {
  return (
    <section className={styles.container}>
      <div className={styles.innerContainer}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className={styles.header}
        >
          <h2 className={styles.title}>
            Softwares used in <span className={styles.gradient}>aura</span>
          </h2>
        </motion.div>
        
        <div className={styles.grid}>
          {technologies.map((tech, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={styles.techItem}
            >
              <div className={styles.logoContainer}>
                <Image  
                  src={tech.logo} 
                  alt={tech.alt}
                  width={tech.width}       // Required
                  height={tech.height}     // Required
                  className={styles.logo}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TechStack
