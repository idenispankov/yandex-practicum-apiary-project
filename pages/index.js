import Head from 'next/head';
import Hero from '../components/Hero/Hero';
import ModalWithForm from '../components/Modal/ModalWithForm';
import Tooltip from '../components/Tooltip/Tooltip';
import RequestsWeHelpWith from '../components/RequestsWeHelpWith/RequestsWeHelpWith';
import DarkSectionWithCards from '../components/DarkSectionWithCards/DarkSectionWithCards';
import resourceImage from '../public/images/resource.svg';
import publicizeImage from '../public/images/publicize.svg';
import boostImage from '../public/images/prboost.svg';
import qualityImage from '../public/images/quality.svg';
import professionalismImage from '../public/images/professionalism.svg';
import experienceImage from '../public/images/experience.svg';

export default function Home({
  isModalOpen,
  setIsModalOpen,
  tooltipOpen,
  setTooltipOpen,
}) {
  return (
    <>
      <Head>
        <title>Practicum by Yandex | Home</title>
        <meta
          name='description'
          content='Your task. Done by data and web development students. For free!'
        />
        <meta
          name='description'
          property='og:description'
          content='Your task. Done by data and web development students. For free!'
        />
        <meta name='image' property='og:image' content='/og_image.png' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Hero isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
      <DarkSectionWithCards
        firstImage={resourceImage}
        secondImage={publicizeImage}
        thirdImage={boostImage}
        sectionHeading='Why is it useful for your company?'
        sectionSubheading='By handing over assignments to students for work, you free experienced
        employees from routine tasks, as well as increase brand awareness.'
        firstCardHeading='Recource saving'
        secondCardHeading='Publicize'
        thirdCardHeading='PR Boost'
        firstCardText='Delegate tasks for free and get results that can be used in your future work.'
        secondCardText='We take pride in the real-world value of the tasks that our students perform and we share them in all available channels.'
        thirdCardText='This will increase the visibility of the company among job seekers and attract those who share the values of your company.'
      />
      {/* <RequestsWeHelpWith /> */}
      <DarkSectionWithCards
        firstImage={qualityImage}
        secondImage={professionalismImage}
        thirdImage={experienceImage}
        sectionHeading='Why choose us?'
        sectionSubheading="We have built the largest IT company in Russia. We know how to develop
        cool employees, and we work hard to make our clients' lives better and
        happier."
        firstCardHeading='Quality'
        secondCardHeading='Professionalism'
        thirdCardHeading='Experience'
        firstCardText='The Yandex search engine is the fourth ranked search engine in the world in terms of number of requests processed.'
        secondCardText='Practicum by Yandex is one of the most popular online education services in Russia, allowing students to get a new profession or master a new skill.'
        thirdCardText='Our students are already working at Accenture, Tesla, Invitae. Our specialty is practical training for the real world.'
      />
      <ModalWithForm
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        setTooltipOpen={setTooltipOpen}
      />
      <Tooltip tooltipOpen={tooltipOpen} setTooltipOpen={setTooltipOpen} />
    </>
  );
}
