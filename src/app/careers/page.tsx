import React from 'react'
import { Button } from '@/components/ui/Button'
import styles from './Careers.module.css'

const openings = [
  {
    title: 'Senior Front-end Engineer',
    location: 'Remote (GMT ±4)',
    type: 'Full-time',
  },
  {
    title: 'ML Research Scientist',
    location: 'Bengaluru, IN',
    type: 'Full-time',
  },
  {
    title: 'Product Designer (UI/UX)',
    location: 'Remote – APAC',
    type: 'Contract',
  },
]

export default function CareersPage() {
  return (
    <main className={styles.careersContainer}>
      <div className={styles.careersContent}>
        {/* Intro */}
        <header className={styles.careersHeader}>
          <h1 className={`${styles.sectionTitle} ${styles.gradientText}`}>
            Careers at AURA
          </h1>
          <p className={styles.introText}>
            We’re a small, fast-moving team on a mission to reinvent human–computer
            interaction. Help us shape the next decade of AI.
          </p>
        </header>

        {/* Open Roles */}
        <section className={styles.openRoles}>
          {openings.map((role) => (
            <article key={role.title} className={styles.roleCard}>
              <div className={styles.roleInfo}>
                <h3 className={styles.roleTitle}>{role.title}</h3>
                <p className={styles.roleMeta}>
                  {role.location} · {role.type}
                </p>
              </div>
              <Button variant="primary" className={styles.applyButton}>
                Apply now
              </Button>
            </article>
          ))}
        </section>

        {/* Perks */}
        <section className={styles.perksSection}>
          <h2 className={styles.perksTitle}>Why you’ll love it here</h2>
          <ul className={styles.perksList}>
            {[
              'Work from anywhere, forever',
              'Hardware & home-office stipend',
              'Equity for every full-time employee',
              'Annual retreat in an awesome location',
            ].map((perk) => (
              <li key={perk} className={styles.perkItem}>
                <span className={styles.perkIcon}>✔</span>
                <p className={styles.perkText}>{perk}</p>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </main>
  )
}
