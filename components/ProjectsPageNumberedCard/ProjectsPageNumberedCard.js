import styles from './ProjectsPageNumberedCard.module.css';

export default function ProjectsPageNumberedCard({
  cardNumber,
  cardHeading,
  cardText,
}) {
  return (
    <li className={styles.card}>
      <h2 className={styles.card__number}>{cardNumber}</h2>
      <p className={styles.card__heading}>{cardHeading}</p>
      <p className={styles.card__text}>{cardText}</p>
    </li>
  );
}
