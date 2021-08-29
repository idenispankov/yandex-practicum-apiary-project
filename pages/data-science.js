import styles from '../styles/pageStyles.module.css';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import ProjectsPageHeader from '../components/ProjectsPageHeader/ProjectsPageHeader';

export default function DataSciencePage({ setIsModalOpen }) {
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
      <Footer linkToAbout='#about' />
    </>
  );
}
