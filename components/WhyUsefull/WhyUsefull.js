import styles from './WhyUsefull.module.css';
import Card from '../Card/Card';
import resourceImage from '../../public/images/resource.svg';
import publicizeImage from '../../public/images/publicize.svg';
import boostImage from '../../public/images/prboost.svg';

function WhyUsefull() {
  return (
    <section className={styles.section}>
      <div className={styles.section__container}>
        <h2 className={styles.section__heading}>
          Why is it useful for your company?
        </h2>
        <p className={styles.section__subheading}>
          By handing over assignments to students for work, you free experienced
          employees from routine tasks, as well as increase brand awareness.
        </p>
        <div className={styles.card__container}>
          <Card
            cardImage={resourceImage}
            cardAlt=''
            cardHeading='Recource saving'
            cardText='Delegate tasks for free and get results that can be used in your future work.'
          />
          <div className={styles.two_cards__container}>
            <Card
              cardImage={publicizeImage}
              cardAlt=''
              cardHeading='Publicize'
              cardText='We take pride in the real-world value of the tasks that our students perform and we share them in all available channels.'
            />
            <Card
              cardImage={boostImage}
              cardAlt=''
              cardHeading='PR Boost'
              cardText='This will increase the visibility of the company among job seekers and attract those who share the values of your company.'
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhyUsefull;
