import styles from './ProjectsPageHeader.module.css';
import Image from 'next/image';
import Card from '../ProjectsPageNumberedCard/ProjectsPageNumberedCard';

export default function ProjectsPageHeader({
  imageSrc,
  heading,
  text,
  firstCardHeading,
  firstCardText,
  seconsdCardHeading,
  seconsdCardText,
  thirdCardHeading,
  thirdCardText,
}) {
  return (
    <section className={styles.section}>
      <div className={styles.section__container} id='about'>
        <div className={styles.image__container}>
          <Image
            src={imageSrc}
            alt='some alt text'
            width={267}
            height={217}
            layout='responsive'
          />
        </div>
        <div className={styles.text__container}>
          <h1 className={styles.section__heading}>{heading}</h1>
          <p className={styles.section__text}>{text}</p>
        </div>
        <ul className={styles.section__list}>
          <Card
            cardNumber='1'
            cardHeading={firstCardHeading}
            cardText={firstCardText}
          />
          <Card
            cardNumber='2'
            cardHeading={seconsdCardHeading}
            cardText={seconsdCardText}
          />
          <Card
            cardNumber='3'
            cardHeading={thirdCardHeading}
            cardText={thirdCardText}
          />
        </ul>
      </div>
    </section>
  );
}
