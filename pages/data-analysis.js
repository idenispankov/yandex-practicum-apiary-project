import styles from '../styles/pageStyles.module.css';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import ProjectsPageHeader from '../components/ProjectsPageHeader/ProjectsPageHeader';

export default function DataAnalysisPage({ setIsModalOpen }) {
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
      <Footer linkToAbout='#about' />
    </>
  );
}
