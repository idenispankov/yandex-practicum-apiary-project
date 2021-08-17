import styles from './Button.module.css';

export default function Button({ buttonStyles, buttonText, handleClick }) {
  return (
    <button
      onClick={handleClick}
      className={`${styles.button} ${buttonStyles}`}
    >
      {buttonText}
    </button>
  );
}
