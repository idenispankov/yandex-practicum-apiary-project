import styles from './CanWeHelp.module.css';
import Card from '../Card/Card';
import webImage from '../../public/images/web-development.svg';
import dataAnalysisImage from '../../public/images/data-analysis.svg';
import dataScienceImage from '../../public/images/data-science.svg';

export default function CanWeHelp() {
  return (
    <section className={styles.section}>
      <div className={styles.section__container}>
        <h2 className={styles.section__heading}>
          What requests can we help with?
        </h2>
        <p className={styles.section__subheading}>
          We carry out important, non-urgent tasks, with results that you can
          use in your work.
        </p>
        <div className={styles.card__container}>
          <Card
            cardStyles={styles.card_reverse}
            cardImage={webImage}
            cardAlt=''
            cardHeading='Web development'
            cardText='#programming'
            cardHeadingStyles={styles.card__heading}
            cardTextStyles={styles.card__text}
            cardImageStyles={styles.card__image}
          />
          <div className={styles.two_cards__container}>
            <Card
              cardStyles={styles.card_reverse}
              cardImage={dataAnalysisImage}
              cardAlt=''
              cardHeading='Data analysis'
              cardText='#analysis'
              cardHeadingStyles={styles.card__heading}
              cardTextStyles={styles.card__text}
              cardImageStyles={styles.card__image}
            />
            <Card
              cardStyles={styles.card_reverse}
              cardImage={dataScienceImage}
              cardAlt=''
              cardHeading='Data science'
              cardText='#analysis'
              cardHeadingStyles={styles.card__heading}
              cardTextStyles={styles.card__text}
              cardImageStyles={styles.card__image}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
