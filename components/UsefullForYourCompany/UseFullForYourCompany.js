import DarkSectionWithCards from '../DarkSectionWithCards/DarkSectionWithCards';
import resourceImage from '../../public/images/resource.svg';
import publicizeImage from '../../public/images/publicize.svg';
import boostImage from '../../public/images/prboost.svg';

export default function UseFullForYourCompany() {
  return (
    <DarkSectionWithCards
      firstImage={resourceImage}
      cardAlt='background icons'
      secondImage={publicizeImage}
      thirdImage={boostImage}
      sectionHeading='Why is it useful for your company?'
      sectionSubheading='By handing over assignments to students for work, you free experienced
  employees from routine tasks, as well as increase brand awareness.'
      firstCardHeading='Recource saving'
      secondCardHeading='Publicize'
      thirdCardHeading='PR Boost'
      firstCardText='Delegate tasks for free and get results that can be used in your future work.'
      secondCardText='We take pride in the real-world value of the tasks that our students perform and we share them in all available channels.'
      thirdCardText='This will increase the visibility of the company among job seekers and attract those who share the values of your company.'
    />
  );
}
