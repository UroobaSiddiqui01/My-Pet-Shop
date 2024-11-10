"use client";
import React from 'react';
import styles from '../component/styles/header.module.css';
import Link from 'next/link';
import Image from 'next/image';
import * as Dialog from '@radix-ui/react-dialog';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'; // Import icons

const Header: React.FC = () => {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.logo}>
          <Image
            src="/images-logopreview.png" // Replace with your actual logo path
            alt="Your Logo"
            width={100}
            height={100}
          />
        </div>

        {/* Dialog Trigger Button */}
        <Dialog.Root>
          <Dialog.Trigger asChild>
            <button className={styles.menuButton}>
              <AiOutlineMenu size={24} color="#fff" /> {/* Menu Icon */}
            </button>
          </Dialog.Trigger>

          {/* Sidebar (Dialog Content) */}
          <Dialog.Portal>
            <Dialog.Overlay className={styles.overlay} />
            <Dialog.Content className={styles.sidebar}>
              <Dialog.Close asChild>
                <button className={styles.closeButton}>
                  <AiOutlineClose size={24} color="#fff" /> {/* Close Icon */}
                </button>
              </Dialog.Close>

              <nav className={styles.nav}>
                <Link href="#" legacyBehavior>
                  <a className={styles.navLink}>Home</a>
                </Link>
                <Link href="#About" legacyBehavior>
                  <a className={styles.navLink}>About</a>
                </Link>
                <Link href="#galler" legacyBehavior>
                  <a className={styles.navLink}>Gallery</a>
                </Link>
                <Link href="#contact" legacyBehavior>
                  <a className={styles.navLink}>Contact</a>
                </Link>
              </nav>
            </Dialog.Content>
          </Dialog.Portal>
        </Dialog.Root>
      </header>
    </>
  );
};

export default Header;






