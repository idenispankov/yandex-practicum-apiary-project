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

export default function DataSciencePage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [tooltipOpen, setTooltipOpen] = useState(false);
  return (
    <>
      <Head>
        <title>Data Science | Practicum by Yandex </title>
        <meta
          name='description'
          content='What data science requests can we help with?
          Practicum by Yandex students are ready to undertake analytics of the data provided by the company or if necessary, are ready to conduct market research to obtain the necessary data for analysis.'
        />
        <meta
          name='description'
          property='og:description'
          content='What data science requests can we help with?
          Practicum by Yandex students are ready to undertake analytics of the data provided by the company or if necessary, are ready to conduct market research to obtain the necessary data for analysis.'
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
        imageSrc='/images/data_science_page_image.svg'
        heading='What data science requests can we help with?'
        text='Practicum by Yandex students are ready to undertake analytics of the data provided by the company or if necessary, are ready to conduct market research to obtain the necessary data for analysis.'
        firstCardHeading='Text recognition'
        firstCardText='We handle photo recognition of texts of different languages ranging from English to Arabic.'
        seconsdCardHeading='Checking and improving existing algorithms'
        seconsdCardText='We test the algorithms available to your company, check them using your data or open data, and suggest hypotheses for improvement.'
        thirdCardHeading='Recognition of audio and video files'
        thirdCardText='We can recognize files of different types, create algorithms for finding errors in them, and generating reports.'
      />
      <Projects
        heading='Check out the data science  projects our students have done so far'
        setIsModalOpen={setIsModalOpen}
        projectsContainer={styles.container}
        buttonsContainerStyles={styles.buttons__container}
      >
        <ul className={styles.projects__list}>
          {projectsData.science.map((item) => {
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
