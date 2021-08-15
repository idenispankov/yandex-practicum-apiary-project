import styles from './Navbar.module.css';
import Link from 'next/link';

export default function Navbar() {
  return (
    <header>
      <nav className={styles.navbar}>
        <Link href='/'>
          <a>
            <div className={styles.logo}></div>
          </a>
        </Link>
        <ul className={styles.list}>
          <li>
            <Link href='we-can-help'>
              <a className={styles.list__item}>We can help!</a>
            </Link>
          </li>
          <li>
            <Link href='about'>
              <a className={styles.list__item}>About</a>
            </Link>
          </li>
          <li>
            <Link href='we-can-help'>
              <a className={styles.list__item}>How to start</a>
            </Link>
          </li>
          <li>
            <Link href='we-can-help'>
              <a className={styles.list__item}>Projects</a>
            </Link>
          </li>
          <li>
            <Link href='we-can-help'>
              <a className={styles.list__item}>Contacts</a>
            </Link>
          </li>
        </ul>
        <button className={styles.button}>Delegate a task</button>
      </nav>
    </header>
  );
}
