import DarkSectionWithCards from '../DarkSectionWithCards/DarkSectionWithCards';
import qualityImage from '../../public/images/quality.svg';
import professionalismImage from '../../public/images/professionalism.svg';
import experienceImage from '../../public/images/experience.svg';

export default function WhyChooseUs() {
  return (
    <DarkSectionWithCards
      firstImage={qualityImage}
      secondImage={professionalismImage}
      thirdImage={experienceImage}
      sectionHeading='Why choose us?'
      sectionSubheading="We have built the largest IT company in Russia. We know how to develop
  cool employees, and we work hard to make our clients' lives better and
  happier."
      firstCardHeading='Quality'
      secondCardHeading='Professionalism'
      thirdCardHeading='Experience'
      firstCardText='The Yandex search engine is the fourth ranked search engine in the world in terms of number of requests processed.'
      secondCardText='Practicum by Yandex is one of the most popular online education services in Russia, allowing students to get a new profession or master a new skill.'
      thirdCardText='Our students are already working at Accenture, Tesla, Invitae. Our specialty is practical training for the real world.'
    />
  );
}
