import Head from 'next/head';

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
      <Head>
        <title>Web development | Practicum by Yandex </title>
        <meta
          name='description'
          content='What web development requests can we help with?
          Practicum by Yandex students are ready to build your website from your design or if necessary, we can ask our colleagues from the design team to create a unique design for your company and a website based on this design.'
        />
        <meta
          name='description'
          property='og:description'
          content='What web development requests can we help with?
          Practicum by Yandex students are ready to build your website from your design or if necessary, we can ask our colleagues from the design team to create a unique design for your company and a website based on this design.'
        />
        <meta name='image' property='og:image' content='/og_image.png' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
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
                <Project data={item} />
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
