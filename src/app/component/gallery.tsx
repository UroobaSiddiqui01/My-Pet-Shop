'use client'
import React, { useState } from 'react';
import styles from '../component/styles/gallery.module.css';
import Image from 'next/image';

const Gallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const handleViewDetails = (imageName: string) => {
    setSelectedImage(imageName);
  };

  const closeDetails = () => {
    setSelectedImage(null);
  };

  return (
    <section id='galler' className={styles.gallery}>
      <h2>Image Gallery</h2>
      <div className={styles.grid}>
        {/* Example images */}
        
        <div className={styles.imageContainer}>
          <Image src="/images (1).jpeg" alt="Image 2" width={300} height={200} className={styles.image} />
          <button onClick={() => handleViewDetails('Birds')} className={styles.detailsButton}>View Details</button>
        </div>
        <div className={styles.imageContainer}>
          <Image src="/16101556.jpg" alt="Image 1" width={400} height={400} className={styles.image} />
          <button onClick={() => handleViewDetails('Parrot')} className={styles.detailsButton}>View Details</button>
        </div>
        <div className={styles.imageContainer}>
          <Image src="/Lovebird-5-650x425.jpg" alt="Image 2" width={300} height={200} className={styles.image} />
          <button onClick={() => handleViewDetails('Love Birds')} className={styles.detailsButton}>View Details</button>
        </div>
        
      </div>

      {/* Modal for displaying details */}
      {selectedImage && (
        <div className={styles.modal}>
          <div className={styles.modalContent}>
            <h3>{selectedImage} Details</h3>
            <p><strong>Feed:</strong> Seeds, fruits, and nuts.</p>
            <p><strong>Environment:</strong> Tropical and subtropical forests.</p>
            <button onClick={closeDetails} className={styles.closeButton}>Close</button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;


