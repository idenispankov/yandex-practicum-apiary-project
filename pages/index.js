import Head from 'next/head';
import Hero from '../components/Hero/Hero';
import ModalWithForm from '../components/Modal/ModalWithForm';
import Tooltip from '../components/Tooltip/Tooltip';
import WhyUsefull from '../components/WhyUsefull/WhyUsefull';
// import CanWeHelp from '../components/CanWeHelp/CanWeHelp';
import WhyChooseUs from '../components/WhyChooseUs/WhyChooseUs';

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
      <WhyUsefull />
      {/* <CanWeHelp /> */}
      <WhyChooseUs />
      <ModalWithForm
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        setTooltipOpen={setTooltipOpen}
      />
      <Tooltip tooltipOpen={tooltipOpen} setTooltipOpen={setTooltipOpen} />
    </>
  );
}
