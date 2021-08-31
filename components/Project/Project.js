import styles from './Project.module.css';
import Image from 'next/image';

export default function Project({ data }) {
  return (
    <>
      <div className={styles.project}>
        <div className={styles.project__image_container}>
          <Image
            className={styles.project__image}
            src={data.projectImageSrc}
            alt={data.projectImageAlt}
            layout='fill'
          />
        </div>
        <div className={styles.project_text__container}>
          <div>
            <h3 className={styles.project__heading}>{data.projectName}</h3>
            <p className={styles.project__text}>{data.projectDescription}</p>
            <p className={styles.project__text}>
              {data.projectSecodaryDescription}
            </p>
          </div>
          <div className={styles.project_text__container_footer}>
            <p className={styles.footer__text}>{data.projectDate}</p>
            <a
              target='_blank'
              rel='noopener noreferrer'
              className={styles.footer__link}
              href={data.projectWebsiteLink}
            >
              {data.projectWebsiteText}
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
                src={data.ownerImageSrc}
                alt={data.ownerImageAlt}
                layout='responsive'
                width={60}
                height={60}
              />
            </div>
            <div className={styles.owner_title__container}>
              <h3 className={styles.owner__heading}>{data.ownerName}</h3>
              <p className={styles.owner__subheading}>{data.ownerTitle}</p>
            </div>
          </div>
          <p className={styles.owner__text}>{data.ownerReview}</p>
          <a
            href={data.ownerFullReviewLink}
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
                  src={data.firstStudentImageSrc}
                  alt={data.firstStudentImageAlt}
                  layout='responsive'
                  width={60}
                  height={60}
                />
              </div>
              <div className={styles.students__image_second_container}>
                <Image
                  className={styles.students__second_image}
                  src={data.secondStudentImageSrc}
                  alt={data.secondStudentImageAlt}
                  layout='responsive'
                  width={60}
                  height={60}
                />
              </div>
              <div className={styles.students__image_third_container}>
                <Image
                  className={styles.students__third_image}
                  src={data.thirdStudentImageSrc}
                  alt={data.thirdStudentImageAlt}
                  layout='responsive'
                  width={60}
                  height={60}
                />
              </div>
            </div>
            <div className={styles.students__title_container}>
              <h3 className={styles.students__heading}>Students team</h3>
              <p className={styles.students__subheading}>
                {data.studentsNames}
              </p>
            </div>
          </div>
          <p className={styles.students__text}>{data.studentsReviewText}</p>
        </div>
      </div>
    </>
  );
}
