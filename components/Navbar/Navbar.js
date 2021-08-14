import styles from './Navbar.module.css';
import Link from 'next/link';
import Image from 'next/image';
import logo from '../../public/images/logo.svg';

export default function Navbar() {
  return (
    <header className={styles.header}>
      <nav className={styles.navbar}>
        <Link href='/'>
          <a className={styles.logo__container}>
            <div className={styles.logo__image}>
              <Image src={logo} alt='Practicum by Yandex logo' />
            </div>
          </a>
        </Link>
        <ul className={styles.list}>
          <li className={styles.list__item}>
            <Link href='#we-can-help'>
              <a className={styles.list__item_link}>We can help!</a>
            </Link>
          </li>
          <li className={styles.list__item}>
            <Link href='#about'>
              <a className={styles.list__item_link}>About</a>
            </Link>
          </li>
          <li className={styles.list__item}>
            <Link href='#how-to-start'>
              <a className={styles.list__item_link}>How to start</a>
            </Link>
          </li>
          <li className={styles.list__item}>
            <Link href='#projects'>
              <a className={styles.list__item_link}>Projects</a>
            </Link>
          </li>
          <li className={styles.list__item}>
            <Link href='#contacts'>
              <a className={styles.list__item_link}>Contacts</a>
            </Link>
          </li>
        </ul>
        <button className={styles.button}>Delegate a task</button>
      </nav>
    </header>
  );
}
