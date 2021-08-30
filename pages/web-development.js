import styles from '../styles/pageStyles.module.css';
import { useState } from 'react';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import ProjectsPageHeader from '../components/ProjectsPageHeader/ProjectsPageHeader';
import Projects from '../components/Projects/Projects';
import Project from '../components/Project/Project';
import projectsData from '../vendor/data/projectsData';
import ModalWithForm from '../components/Modal/ModalWithForm';
import Tooltip from '../components/Tooltip/Tooltip';

export default function WebDevelopmentPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [tooltipOpen, setTooltipOpen] = useState(false);
  return (
    <>
      <Navbar
        setIsModalOpen={setIsModalOpen}
        firstLink='Back to homepage'
        firstLinkTo='/'
        secondLink='Students’ projects'
        secondLinkTo='#projects'
        thirdLink=''
        thirdLinkTo=''
        forthLink=''
        forthLinkTo=''
        fifthLink=''
        fifthLinkTo=''
        listStyles={styles.list}
        firstLinkStyles={styles.link}
      />
      <ProjectsPageHeader
        imageSrc='/images/web_page_image.svg'
        heading='What web development requests can we help with?'
        text='Practicum by Yandex students are ready to build your website from your design or if necessary, we can ask our colleagues from the design team to create a unique design for your company and a website based on this design.'
        firstCardHeading='Create a one page website from scratch'
        firstCardText='We can create a landing page for a new project or refresh an existing one'
        seconsdCardHeading='We make up your website design'
        seconsdCardText='If you already have a website design, we will gladly prepare an adaptive layout.'
        thirdCardHeading="Let's create a complex multi-page website for the project"
        thirdCardText='We are able to work on highly complex websites with deeply nested pages.'
      />
      <Projects
        heading='Check out the web development projects our students have done so far'
        setIsModalOpen={setIsModalOpen}
        projectsContainer={styles.container}
        buttonsContainerStyles={styles.buttons__container}
      >
        <ul className={styles.projects__list}>
          {projectsData.web.map((item) => {
            return (
              <li key={item.id}>
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
      </Projects>
      <ModalWithForm
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        setTooltipOpen={setTooltipOpen}
      />
      <Tooltip tooltipOpen={tooltipOpen} setTooltipOpen={setTooltipOpen} />
      <Footer linkToAbout='#about' />
    </>
  );
}
