import styles from './Card.module.css';
import Image from 'next/image';

function Card({
  cardStyles,
  cardImage,
  cardAlt,
  cardHeading,
  cardText,
  cardHeadingStyles,
  cardTextStyles,
  cardImageStyles,
}) {
  return (
    <div className={`${styles.card} ${cardStyles}`}>
      <div className={`${styles.card__image} ${cardImageStyles}`}>
        <Image
          src={cardImage}
          alt={cardAlt}
          width={400}
          height={202}
          layout='fixed'
        />
      </div>
      <h3 className={`${styles.card__heading} ${cardHeadingStyles}`}>
        {cardHeading}
      </h3>
      <p className={`${styles.card__text} ${cardTextStyles}`}>{cardText}</p>
    </div>
  );
}

export default Card;
