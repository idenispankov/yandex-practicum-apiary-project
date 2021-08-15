import styles from './Button.module.css';

export default function Button({ buttonStyles, buttonText }) {
  return (
    <button className={`${styles.button} ${buttonStyles}`}>{buttonText}</button>
  );
}
