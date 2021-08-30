/* eslint-disable react/no-unescaped-entities */
import styles from './MessagesSection.module.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import Button from '../Button/Button';

export default function MessagesSection({ setIsModalOpen }) {
  useEffect(() => {
    AOS.init({
      offset: 75,
    });
  }, []);

  return (
    <section id='about' className={styles.section}>
      <div className={styles.section__container}>
        <h2 data-aos='fade-in' className={styles.section__heading}>
          What is Practicum by Yandex?
        </h2>

        <div className={styles.message__container}>
          <p data-aos='fade-right' className={styles.message}>
            Practicum by Yandex is a kind of boot camp. Our goal is to help
            ambitious and passionate people to master it and find their first
            job. At the same time, the level of our training allows graduates to
            carry out high-quality real projects of companies under the review
            of experienced mentors.
            <span className={styles.message__avatar} />
          </p>
        </div>
        <div className={styles.question__container}>
          <p data-aos='fade-up-left' className={styles.question}>
            Who will solve the problems? How much does it cost?
          </p>
        </div>
        <div className={styles.message__container}>
          <p data-aos='fade-right' className={styles.message}>
            It is a win-win situation: we take real tasks from real companies
            and give them to graduates of Data Science and Data Analytics
            courses. The results of these tasks will be repeatedly checked by
            curators and returned to the customer as ordered for free.
            <span className={styles.message__avatar} />
          </p>
        </div>
        <div className={styles.question__container}>
          <p data-aos='fade-up-left' className={styles.question}>
            Why is it free?
          </p>
        </div>
        <div className={styles.message__container}>
          <p data-aos='fade-right' className={styles.message}>
            Because Practicum has students who are eager to gain real life
            experience, find them interesting and useful, and are ready to take
            on your tasks
            <span className={styles.message__avatar} />
          </p>
        </div>
        <div className={styles.question__container}>
          <p data-aos='fade-up-left' className={styles.question}>
            Wow! I'm ready to start!
          </p>
        </div>
      </div>
      <div data-aos='zoom-in'>
        <Button
          buttonStyles={styles.button}
          buttonText='Delegate a task'
          setIsModalOpen={setIsModalOpen}
          handleClick={() => setIsModalOpen(true)}
        />
      </div>
    </section>
  );
}
