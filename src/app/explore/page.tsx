'use client'

import Image from 'next/image'
import styles from './Explore.module.css'


interface Feature {
  title: string
  copy: string
  icon: string
}

const features: Feature[] = [
  {
    title: 'Voice Commands',
    copy: 'Control apps, devices and services completely hands-free.',
    icon: '/icons/mic.svg',
  },
  {
    title: 'Smart Summaries',
    copy: 'Digest documents, web pages and meetings instantly.',
    icon: '/icons/summary.svg',
  },
  {
    title: 'Contextual Actions',
    copy: 'AURA predicts what you need next and surfaces shortcuts.',
    icon: '/icons/bolt.svg',
  },
  {
    title: 'Vision Mode',
    copy: 'Point your camera at anything and get instant assistance.',
    icon: '/icons/vision.svg',
  },
  {
    title: 'Developer-friendly API',
    copy: 'Build your own AURA skills with a simple REST & WebSocket API.',
    icon: '/icons/code.svg',
  },
  {
    title: 'Privacy by Design',
    copy: 'All processing happens on-device unless you opt-in to cloud sync.',
    icon: '/icons/shield.svg',
  },
]

export default function ExplorePage() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        {/* Hero Header */}
        <header className={styles.header}>
          <h1 className={`${styles.title} gradient-text`}>Explore AURA</h1>
          <p className={styles.subtitle}>
            Intelligent tools to power your day-to-day life.
          </p>
        </header>

        {/* Features Grid */}
        <div className={styles.grid}>
          {features.map(({ title, copy, icon }: Feature) => (
            <article key={title} className={`${styles.card} group`}>
              <div className={styles.cardHeader}>
                <Image
                  src={icon}
                  alt={title}
                  width={40}
                  height={40}
                  className={styles.icon}
                />
                <h3 className={styles.cardTitle}>{title}</h3>
              </div>
              <p className={styles.cardText}>{copy}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
