import styles from './ProjectsPageNumberedCard.module.css';

export default function ProjectsPageNumberedCard({
  cardNumber,
  cardHeading,
  cardText,
}) {
  return (
    <li className={styles.card}>
      <span className={styles.card__number}>{cardNumber}</span>
      <p className={styles.card__heading}>{cardHeading}</p>
      <p className={styles.card__text}>{cardText}</p>
    </li>
  );
}
