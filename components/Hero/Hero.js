import styles from './Hero.module.css';
import MainStyles from '../../styles/MainStyles.module.css';
// import Image from 'next/image';
// import hero from '../../public/images/hero.png';

export default function Hero() {
  return (
    <section className={styles.section}>
      <h1>HELLO</h1>
      {/* <div className={styles.text__container}>
        <h1 className={styles.section__heading}>
          Your task. Done by data and web development students.{' '}
          <span className={styles.section__heading_span}>For free!</span>
        </h1>
        <button className={MainStyles.button_type_dark}>Delegate a task</button>
      </div>
      <div className={styles.section__image}>
        <Image src={hero} alt='girl meditating' layout='fixed' />
      </div> */}
    </section>
  );
}
