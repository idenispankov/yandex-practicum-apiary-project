import styles from './SectionWrapper.module.css';

function SectionWrapper({ children, containerStyles }) {
  return (
    <div className={`${styles.container} ${containerStyles}`}>{children}</div>
  );
}

export default SectionWrapper;
