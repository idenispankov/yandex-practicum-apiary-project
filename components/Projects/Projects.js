import styles from './Projects.module.css';
import Button from '../Button/Button';
import projectsData from '../../vendor/data/projectsData';
import Project from '../Project/Project';
import { useState } from 'react';

const PROJECTS = {
  web: 'web',
  analysis: 'analysis',
  science: 'science',
};

export default function Projects({ setIsModalOpen }) {
  const [active, setActive] = useState(PROJECTS.web);

  const handleWebDevelopmentClick = () => {
    setActive('web');
  };

  const handleDataAnalysisClick = () => {
    setActive('analysis');
  };

  const handleDataScienceClick = () => {
    setActive('science');
  };

  return (
    <section id='projects' className={styles.section}>
      <div className={styles.section__container}>
        <div className={styles.section__image_mobile} />
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
              active === 'web' && styles.button_active
            }`}
            buttonText='Web development'
          />
          <Button
            handleClick={handleDataAnalysisClick}
            buttonStyles={`${styles.button} ${
              active === 'analysis' && styles.button_active
            }`}
            buttonText='Data analysis'
          />
          <Button
            handleClick={handleDataScienceClick}
            buttonStyles={`${styles.button} ${
              active === 'science' && styles.button_active
            }`}
            buttonText='Data science'
          />
        </div>
        <ul className={styles.projecs__container}>
          {projectsData[active].map((item) => {
            return (
              <li key={item.id} className={styles.project__container_item}>
                <Project
                  projectName={item.projectName}
                  projectDescription={item.projectDescription}
                  projectSecodaryDescription={item.projectSecodaryDescription}
                  projectImageSrc={item.projectImageSrc}
                  projectImageAlt={item.projectImageAlt}
                  projectDate={item.projectDate}
                  projectWebsiteLink={item.projectWebsiteLink}
                  projectWebsiteText={item.projectWebsiteText}
                  ownerImageSrc={item.ownerImageSrc}
                  ownerImageAlt={item.ownerImageAlt}
                  ownerName={item.ownerName}
                  ownerTitle={item.ownerTitle}
                  ownerReview={item.ownerReview}
                  ownerFullReviewLink={item.ownerFullReviewLink}
                  firstStudentImageSrc={item.firstStudentImageSrc}
                  firstStudentImageAlt={item.firstStudentImageAlt}
                  secondStudentImageSrc={item.secondStudentImageSrc}
                  secondStudentImageAlt={item.secondStudentImageAlt}
                  thirdStudentImageSrc={item.thirdStudentImageSrc}
                  thirdStudentImageAlt={item.thirdStudentImageAlt}
                  studentsNames={item.studentsNames}
                  studentsReviewText={item.studentsReviewText}
                />
              </li>
            );
          })}
        </ul>
        <div className={styles.footer__buttons_container}>
          <Button
            buttonText='More projects'
            buttonStyles={`${styles.footer__button} ${styles.footer__button_more_projects}`}
          />
          <Button
            buttonStyles={styles.footer__button}
            buttonText='Deleagate a task'
            handleClick={() => setIsModalOpen(true)}
          />
        </div>
      </div>
    </section>
  );
}
