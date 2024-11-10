// components/About.tsx
import Image from 'next/image';
import styles from '../component/styles/About.module.css';

export default function About() {
  return (
    <section
      id="About"
      className={styles.aboutSection}
      style={{
        backgroundImage: 'url(/depositphotos_225179234-stock-photo-asian-rainforest-jungle-august.jpg)',  // Path to your background image
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className={styles.aboutHeader}>
        <h2>Celebrating The Diversity of Avian Life</h2>
        <p>Discover the beauty and diversity of birds from all over the world.</p>
        <button className={styles.exploreButton}>Explore Now</button>
      </div>

      <div className={styles.birdCards}>
        <div className={styles.birdCard} style={{ backgroundColor: '#Ff6347' }} >
          <Image
            src="/beautiful-northern-cardinal-bird-on-transparent-background-ai-generated-png.webp"
            alt="Bird 1"
            className={styles.birdImage}
            width={350}
            height={400}
          />
          <h3>Scarlet Macaw</h3>
          <p>A vibrant bird known for its striking red, yellow, and blue feathers.</p>
        </div>

        <div className={styles.birdCard} style={{ backgroundColor: '#72f73e' }}>
          <Image
            src="/images__3_-removebg-preview (1).png"
            alt="Bird 2"
            className={styles.birdImage}
            width={400}
            height={400}
          />
          <h3>Green Parrot</h3>
          <p>One of the most intelligent and social birds in the avian world.</p>
        </div>

        <div className={styles.birdCard} style={{ backgroundColor: '#6077ae' }}>
          <Image
            src="/download-removebg-preview.png"
            alt="Bird 3"
            className={styles.birdImage}
            width={400}
            height={400}
          />
          <h3>Blue Jay</h3>
          <p>A bird with brilliant blue feathers and a curious personality.</p>
        </div>
      </div>
    </section>
  );
}

