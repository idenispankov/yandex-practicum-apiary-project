import styles from './Navbar.module.css';
import Link from 'next/link';
import Image from 'next/image';
import logo from '../../public/images/logo.svg';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className={styles.header}>
      <nav className={styles.navbar}>
        <Link href='/'>
          <a
            className={styles.navbar__logo_image}
            onClick={() => setIsOpen(false)}
          >
            <Image src={logo} alt='Practicum by Yandex logo' />
          </a>
        </Link>

        {/* Mobile */}
        <div
          className={`${styles.hamburger} ${isOpen && styles.open}`}
          onClick={() => setIsOpen(!isOpen)}
        >
          <div className={styles.hamburger_before}></div>
          <div className={styles.hamburger_after}></div>
        </div>

        <ul className={`${styles.hamburger__list} ${isOpen && styles.show}`}>
          <li
            className={styles.navbar__list_item}
            onClick={() => setIsOpen(false)}
          >
            <Link href='#we-can-help'>
              <a className={styles.navbar__list_item_link}>We can help!</a>
            </Link>
          </li>
          <li
            className={styles.navbar__list_item}
            onClick={() => setIsOpen(false)}
          >
            <Link href='#about'>
              <a className={styles.navbar__list_item_link}>About</a>
            </Link>
          </li>
          <li
            className={styles.navbar__list_item}
            onClick={() => setIsOpen(false)}
          >
            <Link href='#how-to-start'>
              <a className={styles.navbar__list_item_link}>How to start</a>
            </Link>
          </li>
          <li
            className={styles.navbar__list_item}
            onClick={() => setIsOpen(false)}
          >
            <Link href='#projects'>
              <a className={styles.navbar__list_item_link}>Projects</a>
            </Link>
          </li>
          <li
            className={styles.navbar__list_item}
            onClick={() => setIsOpen(false)}
          >
            <Link href='#contacts'>
              <a className={styles.navbar__list_item_link}>Contacts</a>
            </Link>
          </li>
          <li>
            <button
              className={`${styles.navbar__button} ${styles.navbar__button_mobile}`}
            >
              Delegate a task
            </button>
          </li>
        </ul>

        {/* Desktop */}
        <ul className={styles.navbar__list}>
          <li className={styles.navbar__list_item}>
            <Link href='#we-can-help'>
              <a className={styles.navbar__list_item_link}>We can help!</a>
            </Link>
          </li>
          <li className={styles.navbar__list_item}>
            <Link href='#about'>
              <a className={styles.navbar__list_item_link}>About</a>
            </Link>
          </li>
          <li className={styles.navbar__list_item}>
            <Link href='#how-to-start'>
              <a className={styles.navbar__list_item_link}>How to start</a>
            </Link>
          </li>
          <li className={styles.navbar__list_item}>
            <Link href='#projects'>
              <a className={styles.navbar__list_item_link}>Projects</a>
            </Link>
          </li>
          <li className={styles.navbar__list_item}>
            <Link href='#contacts'>
              <a className={styles.navbar__list_item_link}>Contacts</a>
            </Link>
          </li>
        </ul>
        <button className={styles.navbar__button}>Delegate a task</button>
      </nav>
    </header>
  );
}
