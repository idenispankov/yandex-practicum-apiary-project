import Head from 'next/head';
import { useState } from 'react';
import Navbar from '../components/Navbar/Navbar';
import Hero from '../components/Hero/Hero';
import ModalWithForm from '../components/Modal/ModalWithForm';
import Tooltip from '../components/Tooltip/Tooltip';
import RequestsWeHelpWith from '../components/RequestsWeHelpWith/RequestsWeHelpWith';
import UseFullForYourCompany from '../components/UsefullForYourCompany/UseFullForYourCompany';
import WhyChooseUs from '../components/WhyChooseUs/WhyChooseUs';
import MessagesSection from '../components/MessagesSection/MessagesSection';
import HowToStart from '../components/HowToStart/HowToStart';
import Projects from '../components/Projects/Projects';

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [tooltipOpen, setTooltipOpen] = useState(false);

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
      <Navbar
        setIsModalOpen={setIsModalOpen}
        firstLink='We can help!'
        firstLinkTo='#we-can-help'
        secondLink='About'
        secondLinkTo='#about'
        thirdLink='How to start'
        thirdLinkTo='#how-to-start'
        forthLink='Projects'
        forthLinkTo='#projects'
        fifthLink='Contacts'
        fifthLinkTo='#contacts'
      />
      <Hero setIsModalOpen={setIsModalOpen} />
      <UseFullForYourCompany />
      <RequestsWeHelpWith />
      <MessagesSection setIsModalOpen={setIsModalOpen} />
      <HowToStart setIsModalOpen={setIsModalOpen} />
      <WhyChooseUs />
      <Projects setIsModalOpen={setIsModalOpen} />
      <ModalWithForm
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        setTooltipOpen={setTooltipOpen}
      />
      <Tooltip tooltipOpen={tooltipOpen} setTooltipOpen={setTooltipOpen} />
    </>
  );
}
