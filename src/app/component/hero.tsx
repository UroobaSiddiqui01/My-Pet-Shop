import React from 'react';
import styles from '../component/styles/hero.module.css';
import Image from 'next/image';

const Hero: React.FC = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.heroText}>
        <h2>Welcome to Our Website</h2>
        <p>Your journey starts here with beautiful pastel designs.</p>
      </div>
      
      {/* Multiple Parrot images with animation */}
      <div className={styles.parrotContainer1}>
        <Image src="/removebg-preview.png" alt="Flying Parrot 1" width={150} height={100} className={styles.parrot} />
      </div>
      <div className={styles.parrotContainer2}>
        <Image src="/Snapchat-440425494-removebg-preview.png" alt="Flying Parrot 2" width={120} height={80} className={styles.parrot} />
      </div>
      <div className={styles.parrotContainer3}>
        <Image src="/images-removebg-preview (1).png" alt="Flying Parrot 3" width={180} height={120} className={styles.parrot} />
      </div>
    </section>
  );
};

export default Hero;

