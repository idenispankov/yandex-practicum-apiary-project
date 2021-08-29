import styles from './Footer.module.css';
import Link from 'next/link';

export default function Footer({ linkToAbout }) {
  return (
    <footer id='contacts' className={styles.footer}>
      <div className={styles.footer__container}>
        <div className={styles.links__container}>
          <Link href={linkToAbout}>
            <a className={styles.local__link}>About Us</a>
          </Link>
          <Link href='#top'>
            <a className={styles.local__link}>Back to top &uarr;</a>
          </Link>
        </div>
        <div className={styles.three_column__container}>
          <ul className={styles.contact_info__list}>
            <li className={styles.contact_info__list_item}>
              <a
                className={styles.contact__info_list_item_link}
                href='mailto:msgordienko@yandex-team.com'
              >
                msgordienko@yandex-team.com
              </a>
            </li>
            <li className={styles.contact_info__list_item}>
              <a
                href='https://linkedin.com'
                rel='noopener noreferrer'
                target='_blank'
                className={styles.contact__info_list_item_link}
              >
                LinkedIn
              </a>
            </li>
            <li className={styles.contact_info__list_item}>
              <a
                className={styles.contact__info_list_item_link}
                href='tel:510646625'
              >
                +1-510-646-62-5
              </a>
            </li>
          </ul>
          <div className={styles.card}>
            <div className={styles.card__popup}>
              <p className={styles.card__popup_text}>
                Student Name, Student Name, Student Name, Student Name
              </p>
            </div>
            <p className={styles.card__text}>
              This website is developed by Practicum by Yandex’ students
            </p>
          </div>
          <div className={styles.copyright__container}>
            <p className={styles.copyright}>&copy; 2020 Practicum by Yandex</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
