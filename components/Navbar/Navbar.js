import styles from './Navbar.module.css';
import Link from 'next/link';
import { useState } from 'react';

export default function Navbar({ setIsModalOpen }) {
  const [isHamburgerMenuOpen, setIsHamburgerMenuOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  return (
    <header className={styles.header}>
      <nav className={styles.navbar}>
        <Link href='/'>
          <a>
            <div
              className={styles.logo}
              onClick={() => setIsHamburgerMenuOpen(!isHamburgerMenuOpen)}
            ></div>
          </a>
        </Link>
        <ul className={`${styles.list} ${isHamburgerMenuOpen && styles.show}`}>
          <li
            className={styles.list__item}
            onClick={() => setIsHamburgerMenuOpen(!isHamburgerMenuOpen)}
          >
            <Link href='#we-can-help'>
              <a className={styles.list__link}>We can help!</a>
            </Link>
          </li>
          <li
            className={styles.list__item}
            onClick={() => setIsHamburgerMenuOpen(!isHamburgerMenuOpen)}
          >
            <Link href='#about'>
              <a className={styles.list__link}>About</a>
            </Link>
          </li>
          <li
            className={styles.list__item}
            onClick={() => setIsHamburgerMenuOpen(!isHamburgerMenuOpen)}
          >
            <Link href='#how-to-start'>
              <a className={styles.list__link}>How to start</a>
            </Link>
          </li>
          <li
            className={styles.list__item}
            onClick={() => setIsHamburgerMenuOpen(!isHamburgerMenuOpen)}
          >
            <Link href='#'>
              <a className={styles.list__link}>Projects</a>
            </Link>
          </li>
          <li
            className={styles.list__item}
            onClick={() => setIsHamburgerMenuOpen(!isHamburgerMenuOpen)}
          >
            <Link href='#contacts'>
              <a className={styles.list__link}>Contacts</a>
            </Link>
          </li>
          <li
            className={`${styles.list__item} ${styles.list__item_button}`}
            onClick={() => setIsHamburgerMenuOpen(!isHamburgerMenuOpen)}
          >
            {/* Mobile Button */}
            <button
              onClick={() => openModal()}
              className={`${styles.button} ${styles.button_mobile}`}
            >
              Delegate a task
            </button>
          </li>
        </ul>
        {/* Desktop Button */}
        <button onClick={() => openModal()} className={styles.button}>
          Delegate a task
        </button>

        {/* Hamburger */}
        <div
          onClick={() => setIsHamburgerMenuOpen(!isHamburgerMenuOpen)}
          className={`${styles.hamburger} ${
            isHamburgerMenuOpen && styles.open
          }`}
        >
          <div className={styles.hamburger_before}></div>
          <div className={styles.hamburger_after}></div>
        </div>
      </nav>
    </header>
  );
}
