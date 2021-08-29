import styles from '../styles/pageStyles.module.css';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import ProjectsPageHeader from '../components/ProjectsPageHeader/ProjectsPageHeader';

export default function WebDevelopmentPage({ setIsModalOpen }) {
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
      <Footer linkToAbout='#about' />
    </>
  );
}
