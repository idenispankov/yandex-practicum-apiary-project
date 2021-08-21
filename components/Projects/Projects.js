import styles from './Projects.module.css';
import Button from '../Button/Button';
import { useState } from 'react';

export default function Projects() {
  const [webDevelopment, setWebDevelopment] = useState(true);
  const [dataAnalysis, setDataAnalysis] = useState(false);
  const [dataScience, setDataScience] = useState(false);

  const handleWebDevelopmentClick = () => {
    setDataAnalysis(false);
    setDataScience(false);
    setWebDevelopment(true);
  };

  const handleDataAnalysisClick = () => {
    setDataScience(false);
    setWebDevelopment(false);
    setDataAnalysis(true);
  };

  const handleDataScienceClick = () => {
    setDataAnalysis(false);
    setWebDevelopment(false);
    setDataScience(true);
  };

  return (
    <section className={styles.section}>
      <div className={styles.section__container}>
        <h2 className={styles.section__heading}>
          Delegate tasks to those who enjoy them
        </h2>
        <p className={styles.section__text}>
          Check out the projects our students have done for companies in the USA
          and beyond
        </p>
        <div className={styles.section__image} />
        <div className={styles.buttons__container}>
          <Button
            handleClick={handleWebDevelopmentClick}
            buttonStyles={`${styles.button} ${
              webDevelopment && styles.button_active
            }`}
            buttonText='Web development'
          />
          <Button
            handleClick={handleDataAnalysisClick}
            buttonStyles={`${styles.button} ${
              dataAnalysis && styles.button_active
            }`}
            buttonText='Data analysis'
          />
          <Button
            handleClick={handleDataScienceClick}
            buttonStyles={`${styles.button} ${
              dataScience && styles.button_active
            }`}
            buttonText='Data science'
          />
        </div>
        <ul className={styles.projecs__container}>
          <li className={styles.project__container_item}>
            <div className={styles.project}>
              <div className={styles.project__image} />
              <div className={styles.project_text__container}>
                <h3 className={styles.project__heading}>Ant Robotics</h3>
                <p className={styles.project__text}>
                  Landing page website for the company that cakes automated
                  logistics robots from Oakland, CA
                </p>
                <div className={styles.project_text__container_footer}>
                  <p className={styles.footer__text}>May 2021</p>
                  <a className={styles.footer__link} href='https://google.com'>
                    Visit website &rarr;
                  </a>
                </div>
              </div>
            </div>
            <div className={styles.project__review}>
              <div className={styles.project__review_owner_card}>
                <div className={styles.owner__heading__container}>
                  <div className={styles.owner__image} />
                  <div className={styles.owner_title__container}>
                    <h3 className={styles.owner__heading}>Maxim Antonenko</h3>
                    <p className={styles.owner__subheading}>Ant Robotics CEO</p>
                  </div>
                </div>
                <p className={styles.owner__text}>
                  “The Data Analytics students have highlighted a few languages
                  which show a growing demand for translation and expanded our
                  list of keywords to detect more translation-related user
                  reviews,” Demid said. “The Data Science students tested a wide
                  range of natural language processing algorithms, including
                  deep machine learning...
                </p>
                <a href='#' className={styles.owner_full_review_link}>
                  Read full review
                </a>
              </div>
              <div className={styles.project__review_students_card}>
                <div className={styles.students_header__container}>
                  <div className={styles.students_images__container}>
                    <div className={styles.students__image_first} />
                    <div className={styles.students__image_second} />
                    <div className={styles.students__image_third} />
                  </div>
                  <div className={styles.students__title_container}>
                    <h3 className={styles.students__heading}>Students team</h3>
                    <p className={styles.students__subheading}>
                      Maria Wright, Maria Wright, Enyel Sequeira
                    </p>
                  </div>
                </div>
                <p className={styles.students__text}>
                  “I learned so much from it,” Xia said. “Not just about new
                  packages and methods of analysis and reporting, but also
                  workflow management, how to clarify task requirements,
                  collaborate with others, and more. Those are the kind of
                  experiences I can put on my resume, and that’s awesome too.”
                </p>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
}
