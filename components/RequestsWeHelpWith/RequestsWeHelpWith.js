import styles from './RequestsWeHelpWith.module.css';
import Link from 'next/link';
import Image from 'next/image';
import webImage from '../../public/images/web-development.svg';
import dataAnalysisImage from '../../public/images/data-analysis.svg';
import dataScienceImage from '../../public/images/data-science.svg';

export default function RequestsWeHelpWith() {
  return (
    <section id='we-can-help' className={styles.section}>
      <div className={styles.section__container}>
        <h2 className={styles.section__heading}>
          What requests can we help with?
        </h2>
        <p className={styles.section__subheading}>
          We carry out important, non-urgent tasks, with results that you can
          use in your work.
        </p>
        <div className={styles.card__container}>
          <Link href='/web-development'>
            <a className={styles.card}>
              <p className={`${styles.card__hash}`}>#programming</p>
              <h3 className={`${styles.card__heading}`}>Web development</h3>
              <div className={`${styles.card__image}`}>
                <Image
                  src={webImage}
                  alt='alt text'
                  width={400}
                  height={281}
                  layout='fixed'
                />
              </div>
            </a>
          </Link>
          <div className={styles.two_cards__container}>
            <Link href='/data-analysis'>
              <a className={styles.card}>
                <p className={`${styles.card__hash}`}>#analysis</p>
                <h3 className={`${styles.card__heading}`}>Data analysis</h3>
                <div className={`${styles.card__image}`}>
                  <Image
                    src={dataAnalysisImage}
                    alt='alt text'
                    width={400}
                    height={281}
                    layout='fixed'
                  />
                </div>
              </a>
            </Link>
            <Link href='/data-science'>
              <a className={styles.card}>
                <p className={`${styles.card__hash}`}>#analysis</p>
                <h3 className={`${styles.card__heading}`}>Data science</h3>
                <div className={`${styles.card__image}`}>
                  <Image
                    src={dataScienceImage}
                    alt='alt text'
                    width={400}
                    height={281}
                    layout='fixed'
                  />
                </div>
              </a>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
