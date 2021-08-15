import styles from './Navbar.module.css';
import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className={styles.header}>
      <nav className={styles.navbar}>
        <Link href='/'>
          <a>
            <div
              className={styles.logo}
              onClick={() => setIsOpen(!isOpen)}
            ></div>
          </a>
        </Link>
        <ul className={`${styles.list} ${isOpen && styles.show}`}>
          <li className={styles.list__item} onClick={() => setIsOpen(!isOpen)}>
            <Link href='#we-can-help'>
              <a className={styles.list__link}>We can help!</a>
            </Link>
          </li>
          <li className={styles.list__item} onClick={() => setIsOpen(!isOpen)}>
            <Link href='#about'>
              <a className={styles.list__link}>About</a>
            </Link>
          </li>
          <li className={styles.list__item} onClick={() => setIsOpen(!isOpen)}>
            <Link href='#how-to-start'>
              <a className={styles.list__link}>How to start</a>
            </Link>
          </li>
          <li className={styles.list__item} onClick={() => setIsOpen(!isOpen)}>
            <Link href='#projects'>
              <a className={styles.list__link}>Projects</a>
            </Link>
          </li>
          <li className={styles.list__item} onClick={() => setIsOpen(!isOpen)}>
            <Link href='#contacts'>
              <a className={styles.list__link}>Contacts</a>
            </Link>
          </li>
          <li
            className={`${styles.list__item} ${styles.list__item_button}`}
            onClick={() => setIsOpen(!isOpen)}
          >
            <button className={`${styles.button} ${styles.button_mobile}`}>
              Delegate a task
            </button>
          </li>
        </ul>
        <button className={styles.button}>Delegate a task</button>

        {/* Hamburger */}
        <div
          className={`${styles.hamburger} ${isOpen && styles.open}`}
          onClick={() => setIsOpen(!isOpen)}
        >
          <div className={styles.hamburger_before}></div>
          <div className={styles.hamburger_after}></div>
        </div>
      </nav>
    </header>
  );
}
