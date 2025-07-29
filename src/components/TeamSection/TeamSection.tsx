'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import styles from './TeamSection.module.css'

const teamMembers = [
  { name: 'Srivathsa B S', image: '/srivathsa.png' },
  { name: 'Ms. Naganandhini', image: '/naganandhini.png' },
  { name: 'Arjun L', image: '/arjun.png' },
  { name: 'Aditya Katare', image: '/aditya.png' },
  { name: 'Harshit Pandey', image: '/harshit.png' },
]

const TeamSection = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className={styles.headerContainer}
        >
          <h2 className={`${styles.heading} ${styles.gradientText}`}>
            Meet TEAM XT
          </h2>
        </motion.div>
        
        <div className={styles.teamGrid}>
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={styles.memberCard}
            >
              <motion.div
                className={styles.imageContainer}
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
              >
                <div className={styles.imageWrapper}>
                  {/* Replace with actual images */}
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={128}
                    height={128}
                    className={styles.memberImage}
                  />
                  
                  {/* Fallback placeholder */}
                  <div className={styles.placeholder} style={{ display: 'none' }}>
                    <span className={styles.placeholderText}>
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                </div>
                
                {/* Hover effect ring */}
                <div className={styles.hoverRing} />
              </motion.div>
              
              <h3 className={styles.memberName}>
                {member.name}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TeamSection
