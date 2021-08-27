/* eslint-disable react/no-unescaped-entities */
import styles from './MessagesSection.module.css';
import 'animate.css/animate.min.css';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import Button from '../Button/Button';

export default function MessagesSection({ setIsModalOpen }) {
  return (
    <section id='about' className={styles.section}>
      <div className={styles.section__container}>
        <AnimationOnScroll animateIn='animate__bounceIn'>
          <h2 className={styles.section__heading}>
            What is Practicum by Yandex?
          </h2>
        </AnimationOnScroll>
        <div className={styles.message__container}>
          <AnimationOnScroll animateIn='animate__fadeInLeftBig'>
            <p className={styles.message}>
              Practicum by Yandex is a kind of boot camp. Our goal is to help
              ambitious and passionate people to master it and find their first
              job. At the same time, the level of our training allows graduates
              to carry out high-quality real projects of companies under the
              review of experienced mentors.
              <div className={styles.message__avatar}></div>
            </p>
          </AnimationOnScroll>
        </div>
        <div className={styles.question__container}>
          <AnimationOnScroll animateIn='animate__fadeInRightBig'>
            <p className={styles.question}>
              Who will solve the problems? How much does it cost?
            </p>
          </AnimationOnScroll>
        </div>
        <div className={styles.message__container}>
          <AnimationOnScroll animateIn='animate__fadeInLeftBig'>
            <p className={styles.message}>
              It is a win-win situation: we take real tasks from real companies
              and give them to graduates of Data Science and Data Analytics
              courses. The results of these tasks will be repeatedly checked by
              curators and returned to the customer as ordered for free.
              <div className={styles.message__avatar}></div>
            </p>
          </AnimationOnScroll>
        </div>
        <div className={styles.question__container}>
          <AnimationOnScroll animateIn='animate__fadeInRightBig'>
            <p className={styles.question}>Why is it free?</p>
          </AnimationOnScroll>
        </div>
        <div className={styles.message__container}>
          <AnimationOnScroll animateIn='animate__fadeInLeftBig'>
            <p className={styles.message}>
              Because Practicum has students who are eager to gain real life
              experience, find them interesting and useful, and are ready to
              take on your tasks
              <div className={styles.message__avatar}></div>
            </p>
          </AnimationOnScroll>
        </div>
        <div className={styles.question__container}>
          <AnimationOnScroll animateIn='animate__fadeInRightBig'>
            <p className={styles.question}>Wow! I'm ready to start!</p>
          </AnimationOnScroll>
        </div>
      </div>
      <AnimationOnScroll animateIn='animate__bounceIn'>
        <Button
          buttonStyles={styles.button}
          buttonText='Delegate a task'
          setIsModalOpen={setIsModalOpen}
          handleClick={() => setIsModalOpen(true)}
        />
      </AnimationOnScroll>
    </section>
  );
}
