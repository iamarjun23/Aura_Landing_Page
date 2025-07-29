import { Button } from '@/components/ui/Button'
import styles from './Contact.module.css'

export default function ContactPage() {
  return (
    <section className={styles.sectionContainer}>
      <div className={styles.innerWrapper}>
        <header className={styles.header}>
          <h1 className={`${styles.sectionTitle} ${styles.gradientText}`}>Let’s Talk</h1>
          <p className={styles.headerText}>
            Have a question, media enquiry or partnership idea? Drop us a line ↓
          </p>
        </header>

        <form
          action="https://formspree.io/f/your-id"
          method="POST"
          className={styles.card}
        >
          <div>
            <label htmlFor="name" className={styles.label}>Name</label>
            <input
              id="name"
              name="name"
              required
              className={`${styles.input}`}
            />
          </div>

          <div>
            <label htmlFor="email" className={styles.label}>Email</label>
            <input
              id="email"
              type="email"
              name="email"
              required
              className={styles.input}
            />
          </div>

          <div>
            <label htmlFor="message" className={styles.label}>Message</label>
            <textarea
              id="message"
              name="message"
              required
              rows={5}
              className={styles.textarea}
            />
          </div>

          <Button variant="primary" className={styles.large}>
            Send Message
          </Button>
        </form>

        <div className={styles.socialContainer}>
          <p className={styles.socialNote}>Or reach us directly:</p>
          <p>
            <a href="mailto:hello@aura.ai" className={styles.socialLink}>
              hello@aura.ai
            </a>
          </p>
          <p className={styles.address}>
            AURA AI · Team XT · Bengaluru 560001 · India
          </p>
        </div>
      </div>
    </section>
  )
}
