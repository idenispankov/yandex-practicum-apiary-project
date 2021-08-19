/* eslint-disable react/no-unescaped-entities */
import styles from './HowToStart.module.css';
import Button from '../Button/Button';

export default function HowToStart() {
  return (
    <section className={styles.section}>
      <div className={styles.section__container}>
        <h2 className={styles.section__heading}>How to start?</h2>
        <div className={styles.columns__container}>
          <div className={styles.first_column__container}>
            <div className={styles.card}>
              <div className={styles.first__image} />
              <h3 className={styles.card__heading}>Fill in the checklist</h3>
              <p className={`${styles.card__text} ${styles.first_card__text}`}>
                So that we can understand your request and how we can help you
              </p>
            </div>
            <div className={styles.card}>
              <div className={styles.second__image} />
              <h3 className={styles.card__heading}>
                We will start solving your tasks
              </h3>
              <p className={styles.card__text}>
                Practicum by Yandex students will solve the task, then our
                curators check and correct their solutions. We'll send you the
                work. Additionally, if you wish, you may talk to the authors of
                the best solutions and invite them to join you
              </p>
            </div>
          </div>
          <div className={styles.middle_column__container}>
            <p>1</p>
            <div className={styles.line} />
            <p>2</p>
            <div className={styles.line} />
            <p>3</p>
          </div>
          <div className={styles.last_column__container}>
            <div className={styles.card}>
              <div className={styles.third__image} />
              <h3 className={styles.card__heading}>
                We will clarify the details and connect the necessary experts
              </h3>
              <p className={`${styles.card__text} ${styles.last_card__text}`}>
                We will help you formulate the request so that it's
                understandable to our students, and you will receive a
                high-quality solution in a timely manner
              </p>
            </div>
          </div>
        </div>
        <Button buttonText='Delegate a task' buttonStyles={styles.button} />
      </div>
    </section>
  );
}
