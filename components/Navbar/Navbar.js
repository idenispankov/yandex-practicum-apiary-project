import styles from './Navbar.module.css';
import Link from 'next/link';
import { useState } from 'react';

export default function Navbar({
  setIsModalOpen,
  firstLink,
  firstLinkTo,
  secondLink,
  secondLinkTo,
  thirdLink,
  thirdLinkTo,
  forthLink,
  forthLinkTo,
  fifthLink,
  fifthLinkTo,
  listStyles,
  firstLinkStyles,
}) {
  const [isHamburgerMenuOpen, setIsHamburgerMenuOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  return (
    <header className={styles.header}>
      <nav className={styles.navbar}>
        <Link href='/' id='top'>
          <a>
            <div
              className={styles.logo}
              onClick={() => setIsHamburgerMenuOpen(false)}
            ></div>
          </a>
        </Link>
        <ul
          className={`${styles.list} ${
            isHamburgerMenuOpen && styles.show
          } ${listStyles}`}
        >
          <li
            className={styles.list__item}
            onClick={() => setIsHamburgerMenuOpen(!isHamburgerMenuOpen)}
          >
            <Link href={firstLinkTo}>
              <a className={`${styles.list__link} ${firstLinkStyles}`}>
                {firstLink}
              </a>
            </Link>
          </li>
          <li
            className={styles.list__item}
            onClick={() => setIsHamburgerMenuOpen(!isHamburgerMenuOpen)}
          >
            <Link href={secondLinkTo}>
              <a className={styles.list__link}>{secondLink}</a>
            </Link>
          </li>
          <li
            className={styles.list__item}
            onClick={() => setIsHamburgerMenuOpen(!isHamburgerMenuOpen)}
          >
            <Link href={thirdLinkTo}>
              <a className={styles.list__link}>{thirdLink}</a>
            </Link>
          </li>
          <li
            className={styles.list__item}
            onClick={() => setIsHamburgerMenuOpen(!isHamburgerMenuOpen)}
          >
            <Link href={forthLinkTo}>
              <a className={styles.list__link}>{forthLink}</a>
            </Link>
          </li>
          <li
            className={styles.list__item}
            onClick={() => setIsHamburgerMenuOpen(!isHamburgerMenuOpen)}
          >
            <Link href={fifthLinkTo}>
              <a className={styles.list__link}>{fifthLink}</a>
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
