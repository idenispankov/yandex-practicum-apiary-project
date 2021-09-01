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

export default function DataAnalysisPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [tooltipOpen, setTooltipOpen] = useState(false);
  return (
    <>
      <Head>
        <title>Data Analysis | Practicum by Yandex </title>
        <meta
          name='description'
          content='What data analysis requests can we help with?
          Practicum by Yandex students are ready to undertake analytics of the data provided by the company or if necessary, are ready to conduct market research to obtain the necessary data for analysis.'
        />
        <meta
          name='description'
          property='og:description'
          content='What data analysis requests can we help with?
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
        imageSrc='/images/data_analysis_page_image.svg'
        heading='What data analysis requests can we help with?'
        text='Practicum by Yandex students are ready to undertake analytics of the data provided by the company or if necessary, are ready to conduct market research to obtain the necessary data for analysis.'
        firstCardHeading='We analyze pricing'
        firstCardText="We will analyze your data, competitors' open data, market conditions, and current trends. We will share our conclusions and recommendations regarding the pricing policy of your company."
        seconsdCardHeading='We can build a recommendation model'
        seconsdCardText='We will customize issued recommendations. We will analyze data on the behavior of your clients. You will be able to quickly understand what to offer so that they take the suggested action.'
        thirdCardHeading='We can segment your customer base'
        thirdCardText='We will divide users into segments, select a core, segment them by interests, and give recommendations regarding the most popular content for each group to increase their retention or formulate a discount policy.'
      />
      <Projects
        heading='Check out the data analysis  projects our students have done so far'
        setIsModalOpen={setIsModalOpen}
        projectsContainer={styles.container}
        buttonsContainerStyles={styles.buttons__container}
      >
        <ul className={styles.projects__list}>
          {projectsData.analysis.map((item) => {
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
