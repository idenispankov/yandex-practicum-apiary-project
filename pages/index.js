import Head from 'next/head';
import Hero from '../components/Hero/Hero';

export default function Home() {
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
      <Hero />
    </>
  );
}
