// components/Contact.tsx
import styles from '../component/styles/contact.module.css';

export default function Contact() {
  return (
    <section id='contact' className={styles.contactSection}>
      <h2>Contact Us</h2>
      <p>If you have any questions or inquiries, feel free to reach out to us.</p>

      <form className={styles.contactForm}>
        <div className={styles.formGroup}>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" placeholder="Your Name" required />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" placeholder="Your Email" required />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="message">Message</label>
          <textarea id="message" placeholder="Your Message" required />
        </div>

        <button type="submit" className={styles.submitButton}>Send Message</button>
      </form>
    </section>
  );
}
