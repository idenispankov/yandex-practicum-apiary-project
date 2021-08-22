import styles from './Projects.module.css';
import Button from '../Button/Button';
import ProjectsData from '../../vendor/data/projectsData';
import Project from '../Project/Project';
import { useState } from 'react';

export default function Projects({ setIsModalOpen }) {
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
          {ProjectsData.map((item) => {
            if (item.id > 2) return;
            else {
              return (
                <li key={item.id} className={styles.project__container_item}>
                  <Project
                    projectName={item.projectName}
                    projectDescription={item.projectDescription}
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
            }
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
