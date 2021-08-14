import styles from './Hero.module.css';
// import MainStyles from '../../styles/MainStyles.module.css';
import Image from 'next/image';
import hero from '../../public/images/hero_large.png';

export default function Hero() {
  return (
    <section className={styles.section}>
      <div className={styles.text__container}>
        <h1 className={styles.section__heading}>
          Your task.
          <br className={styles.break_line} /> Done by data and web development
          students. <br className={styles.break_line} />
          <span className={styles.section__heading_span}>For free!</span>
        </h1>
        <button className={`${styles.button}`}>Delegate a task</button>
      </div>
      <div className={styles.section__image}>
        <Image
          src={hero}
          alt='girl meditating'
          layout='responsive'
          width={320}
          height={313}
        />
        <button className={`${styles.button} ${styles.button_type_mobile}`}>
          Delegate a task
        </button>
      </div>
    </section>
  );
}
