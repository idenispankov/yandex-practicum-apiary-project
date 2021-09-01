import styles from './DarkSectionWithCards.module.css';
import Card from '../Card/Card';

export default function DarkSectionWithCards({
  firstImage,
  secondImage,
  thirdImage,
  cardAlt,
  sectionHeading,
  sectionSubheading,
  firstCardHeading,
  secondCardHeading,
  thirdCardHeading,
  firstCardText,
  secondCardText,
  thirdCardText,
}) {
  return (
    <section className={styles.section}>
      <div className={styles.section__container}>
        <h2 className={styles.section__heading}>{sectionHeading}</h2>
        <p className={styles.section__subheading}>{sectionSubheading}</p>
        <div className={styles.card__container}>
          <Card
            cardImage={firstImage}
            cardAlt={cardAlt}
            cardHeading={firstCardHeading}
            cardText={firstCardText}
          />
          <div className={styles.two_cards__container}>
            <Card
              cardImage={secondImage}
              cardAlt={cardAlt}
              cardHeading={secondCardHeading}
              cardText={secondCardText}
            />
            <Card
              cardImage={thirdImage}
              cardAlt={cardAlt}
              cardHeading={thirdCardHeading}
              cardText={thirdCardText}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
