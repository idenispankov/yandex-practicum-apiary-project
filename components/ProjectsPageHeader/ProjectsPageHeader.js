import styles from './ProjectsPageHeader.module.css';
import Image from 'next/image';
import Card from '../ProjectsPageNumberedCard/ProjectsPageNumberedCard';
import webImage from '../../public/images/web_page_image.svg';

export default function ProjectsPageHeader() {
  return (
    <section className={styles.section}>
      <div className={styles.section__container} id='about'>
        <div className={styles.image__container}>
          <Image
            src={webImage}
            alt=''
            width={267}
            height={217}
            layout='responsive'
          />
        </div>
        <div className={styles.text__container}>
          <h1 className={styles.section__heading}>
            What web development requests can we help with?
          </h1>
          <p className={styles.section__text}>
            Practicum by Yandex students are ready to build your website from
            your design or if necessary, we can ask our colleagues from the
            design team to create a unique design for your company and a website
            based on this design.
          </p>
        </div>
        <ul className={styles.section__list}>
          <Card
            cardNumber='1'
            cardHeading='Create a one page website from scratch'
            cardText='We can create a landing page for a new project or refresh an existing one'
          />
          <Card
            cardNumber='2'
            cardHeading='We make up your website design'
            cardText='If you already have a website design, we will gladly prepare an adaptive layout.'
          />
          <Card
            cardNumber='3'
            cardHeading="Let's create a complex multi-page website for the project"
            cardText='We are able to work on highly complex websites with deeply nested pages.'
          />
        </ul>
      </div>
    </section>
  );
}
