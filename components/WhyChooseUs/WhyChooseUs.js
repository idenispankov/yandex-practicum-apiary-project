/* eslint-disable react/no-unescaped-entities */
import styles from './WhyChooseUs.module.css';
import Card from '../Card/Card';
import qualityImage from '../../public/images/quality.svg';
import professionalismImage from '../../public/images/professionalism.svg';
import experienceImage from '../../public/images/experience.svg';

export default function WhyChooseUs() {
  return (
    <section className={styles.section}>
      <div className={styles.section__container}>
        <h2 className={styles.section__heading}>Why choose us?</h2>
        <p className={styles.section__subheading}>
          We have built the largest IT company in Russia. We know how to develop
          cool employees, and we work hard to make our clients' lives better and
          happier.
        </p>
        <div className={styles.card__container}>
          <Card
            cardImage={qualityImage}
            cardAlt=''
            cardHeading='Quality'
            cardText='The Yandex search engine is the fourth ranked search engine in the world in terms of number of requests processed.'
          />
          <div className={styles.two_cards__container}>
            <Card
              cardImage={professionalismImage}
              cardAlt=''
              cardHeading='Professionalism'
              cardText='Practicum by Yandex is one of the most popular online education services in Russia, allowing students to get a new profession or master a new skill.'
            />
            <Card
              cardImage={experienceImage}
              cardAlt=''
              cardHeading='Experience'
              cardText='Our students are already working at Accenture, Tesla, Invitae. Our specialty is practical training for the real world.'
            />
          </div>
        </div>
      </div>
    </section>
  );
}
