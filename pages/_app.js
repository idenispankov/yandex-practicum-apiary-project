import '../styles/globals.css';
import Layout from '../components/Layout/Layout';
import { useState } from 'react';

function MyApp({ Component, pageProps }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [tooltipOpen, setTooltipOpen] = useState(false);

  return (
    <Layout setIsModalOpen={setIsModalOpen}>
      <Component
        {...pageProps}
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        tooltipOpen={tooltipOpen}
        setTooltipOpen={setTooltipOpen}
      />
    </Layout>
  );
}

export default MyApp;
