import styles from './Hero.module.css';
import Button from '../Button/Button';
import Image from 'next/image';
import heroImage from '../../public/images/hero.png';

export default function Hero({ setIsModalOpen }) {
  return (
    <section className={styles.section}>
      <div className={styles.text__container}>
        <h1 className={styles.heading}>
          Your task.
          <br className={styles.linebreak} /> Done by data and web development
          students.
          <br className={styles.linebreak} />{' '}
          <span className={styles.heading__span}>For free!</span>
        </h1>
        <Button
          handleClick={() => setIsModalOpen(true)}
          buttonStyles={styles.button}
          buttonText='Delegate a task'
        />
      </div>
      <div className={styles.image__container}>
        <Image
          src={heroImage}
          alt='Meditating'
          width={542}
          height={530}
          layout='responsive'
        />
      </div>
      <Button
        buttonStyles={styles.button_mobile}
        buttonText='Delegate a task'
        setIsModalOpen={setIsModalOpen}
        handleClick={() => setIsModalOpen(true)}
      />
    </section>
  );
}
