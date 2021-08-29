import styles from '../styles/webDevelopmentPageStyles.module.css';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';

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
      <Footer linkToAbout='#about' />
    </>
  );
}
