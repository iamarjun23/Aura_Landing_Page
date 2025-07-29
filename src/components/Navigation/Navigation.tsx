'use client'

import Link from 'next/link'
import { motion, useScroll, useSpring } from 'framer-motion'
import styles from './Navigation.module.css'  // ✅ Import CSS Module

const navLinks = [
  { label: 'Explore', href: '/explore' },
  { label: 'Careers', href: '/careers' },
  { label: 'Contact Us', href: '/contact' },
]

export default function Navigation() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 90, damping: 20 })

  return (
    <>
      {/* ✅ Progress Bar */}
      <motion.div className={styles.progressBar} style={{ scaleX }} />

      {/* ✅ Navigation Bar */}
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={styles.nav}
      >
        <div className={styles.container}>
          {/* ✅ Logo */}
          <Link href="/" className={styles.logo}>
            AURA
          </Link>

          {/* ✅ Nav Links */}
          <ul className={styles.navLinks}>
            {navLinks.map((link) => (
              <li key={link.label}>
                <Link href={link.href} className={styles.navLink}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* ✅ CTA Button */}
          <Link href="#try" className={styles.ctaButton}>
            Try Now
          </Link>
        </div>
      </motion.nav>
    </>
  )
}
