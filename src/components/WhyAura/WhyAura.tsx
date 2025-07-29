'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import styles from './WhyAura.module.css'

const WhyAura = () => {
  return (
    <section className={styles.section} id="explore">
      <div className={styles.container}>
        <div className={styles.grid}>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className={styles.heading}>
              Why <span className={styles.gradientText}>AURA AI</span>?
            </h2>
            
            <div className={styles.textContent}>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className={styles.paragraph}
              >
                  Empower Your Digital Experience with Intelligence, 
                  Accessibility, and Control
              </motion.p>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className={styles.paragraph}
              >
                AURA AI is more than just an assistant — it&apos;s an 
                ecosystem built to redefine how humans interact with 
                technology.
              </motion.p>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className={styles.paragraph}
              >
                Whether you&apos;re looking to boost productivity, 
                enhance accessibility, or streamline complex tasks,
              </motion.p>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className={styles.paragraph}
              >
                AURA AI gives you the power to do it all — touchlessly 
                and intelligently.
              </motion.p>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className={styles.imageContainer}
          >
            <div className={styles.imageWrapper}>
              <Image
                src="/Robot.png" 
                alt="AURA AI Robot Assistant"
                width={400}
                height={400}
                className={styles.robotImage}
                priority
              />
              {/* Floating elements */}
              <div className={styles.floatingElement1} />
              <div className={styles.floatingElement2} />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default WhyAura
