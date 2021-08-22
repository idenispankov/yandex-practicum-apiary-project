import styles from './Project.module.css';
import Image from 'next/image';

export default function Project({
  projectName,
  projectDescription,
  projectImageSrc,
  projectImageAlt,
  projectDate,
  projectWebsiteLink,
  projectWebsiteText,
  ownerImageSrc,
  ownerImageAlt,
  ownerName,
  ownerTitle,
  ownerReview,
  ownerFullReviewLink,
  firstStudentImageSrc,
  firstStudentImageAlt,
  secondStudentImageSrc,
  secondStudentImageAlt,
  thirdStudentImageSrc,
  thirdStudentImageAlt,
  studentsNames,
  studentsReviewText,
}) {
  return (
    <>
      <div className={styles.project}>
        <div className={styles.project__image}>
          <Image
            src={projectImageSrc}
            alt={projectImageAlt}
            layout='responsive'
            width={630}
            height={365}
          />
        </div>
        <div className={styles.project_text__container}>
          <h3 className={styles.project__heading}>{projectName}</h3>
          <p className={styles.project__text}>{projectDescription}</p>
          <div className={styles.project_text__container_footer}>
            <p className={styles.footer__text}>{projectDate}</p>
            <a className={styles.footer__link} href={projectWebsiteLink}>
              {projectWebsiteText}
            </a>
          </div>
        </div>
      </div>
      <div className={styles.project__review}>
        <div className={styles.project__review_owner_card}>
          <div className={styles.owner__heading__container}>
            <div className={styles.owner__image__container}>
              <Image
                className={styles.owner__image}
                src={ownerImageSrc}
                alt={ownerImageAlt}
                layout='responsive'
                width={60}
                height={60}
              />
            </div>
            <div className={styles.owner_title__container}>
              <h3 className={styles.owner__heading}>{ownerName}</h3>
              <p className={styles.owner__subheading}>{ownerTitle}</p>
            </div>
          </div>
          <p className={styles.owner__text}>{ownerReview}</p>
          <a
            href={ownerFullReviewLink}
            className={styles.owner_full_review_link}
          >
            Read full review
          </a>
        </div>
        <div className={styles.project__review_students_card}>
          <div className={styles.students_header__container}>
            <div className={styles.students_images__container}>
              <div className={styles.students__image_first_container}>
                <Image
                  className={styles.students__first_image}
                  src={firstStudentImageSrc}
                  alt={firstStudentImageAlt}
                  layout='responsive'
                  width={60}
                  height={60}
                />
              </div>
              <div className={styles.students__image_second_container}>
                <Image
                  className={styles.students__second_image}
                  src={secondStudentImageSrc}
                  alt={secondStudentImageAlt}
                  layout='responsive'
                  width={60}
                  height={60}
                />
              </div>
              <div className={styles.students__image_third_container}>
                <Image
                  className={styles.students__third_image}
                  src={thirdStudentImageSrc}
                  alt={thirdStudentImageAlt}
                  layout='responsive'
                  width={60}
                  height={60}
                />
              </div>
            </div>
            <div className={styles.students__title_container}>
              <h3 className={styles.students__heading}>Students team</h3>
              <p className={styles.students__subheading}>{studentsNames}</p>
            </div>
          </div>
          <p className={styles.students__text}>{studentsReviewText}</p>
        </div>
      </div>
    </>
  );
}
