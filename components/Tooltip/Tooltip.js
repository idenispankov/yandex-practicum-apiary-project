import styles from './Tooltip.module.css';
import Button from '../Button/Button';

export default function Tooltip({ tooltipOpen, setTooltipOpen }) {
  const onClose = () => {
    setTooltipOpen(false);
  };

  const handleClick = (e) => {
    e.preventDefault();
    setTooltipOpen(false);
  };
  return (
    <div className={`${styles.modal} ${tooltipOpen && styles.open}`}>
      <form className={`${styles.form} ${styles.form}`}>
        <h2 className={`${styles.form__heading} ${styles.form__heading}`}>
          Thank you for contacting us, Tim Cook from Apple Inc.! We’ll reach out
          to you in email as soon as possible. Looking forward to work together!
        </h2>
        <Button
          buttonText='Done'
          buttonStyles={`${styles.button_type_submit} ${styles.button}`}
          handleClick={handleClick}
        />
      </form>
    </div>
  );
}
