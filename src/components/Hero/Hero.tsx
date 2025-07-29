'use client'

import { motion } from 'framer-motion'
import styles from './Hero.module.css'

const letterVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45 } },
}

export default function Hero() {
  const title = 'AURA'.split('')

  return (
    <section className={styles.heroSection}>
      {/* Rectangle 8 - Dual Conic Gradient Beams */}
      <div className={`${styles.beamGlow} ${styles.left}`} />
      <div className={`${styles.beamGlow} ${styles.right}`} />
      
      {/* Rectangle 9 - Linear Gradient Overlay */}
      <div className={styles.gradientOverlay} />

      <div className={styles.textContainer}>
        {/* Animated Letters */}
        <motion.h1
          className={styles.heading}
          initial="hidden"
          animate="visible"
          variants={{
            visible: { transition: { staggerChildren: 0.22, delayChildren: 0.14 } }
          }}
        >
          {title.map((char, idx) => (
  <motion.span
    key={idx}
    className={styles.gradientText}
    variants={letterVariants}
  >
    {char}
  </motion.span>
))}
        </motion.h1>

        {/* Subtext */}
        <motion.p
          className={styles.subtext}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.95, delay: 1 }}
        >
          Introducing AURA AI by Team XT
        </motion.p>

        {/* JOIN US Button */}
        <motion.button
          className={styles.joinButton}
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.65 }}
          whileHover={{ y: -2, scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          JOIN US
        </motion.button>
      </div>
    </section>
  )
}
