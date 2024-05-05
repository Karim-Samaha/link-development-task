import Container from '../shared/Container/Container';
import styles from './home.module.css';
import ThingsWeDoImg from '../../images/Things _We Do.svg';
import ServiceImage1 from '../../images/Services/1446779582-melsungen-magdeburg.jpg';
import ServiceImage2 from '../../images/Services/Layer 46.jpg';
import ServiceImage3 from '../../images/Services/Layer 46-1.jpg';
import ServiceImage4 from '../../images/Services/Layer 46-2.jpg';
import ServiceImage5 from '../../images/Services/Transformation.jpeg';

const Services = () => {
  return (
    <section className={styles.servicesWrapper}>
      {/* <Container className={styles.servcesContainer}> */}
      <div className={styles.servcesContainer}>
        <img src={ThingsWeDoImg} alt="Things We Do" />
        <div className={styles.servcesImages}>
          <div>
            <div className={styles.serviceImgWrapper}>
              <div></div>
              <img src={ServiceImage5} alt="Services" />{' '}
            </div>
          </div>
          <div>
            <div className={styles.serviceImgWrapper}>
              <div></div>
              <img src={ServiceImage3} alt="Services" />
            </div>
            <div className={styles.serviceImgWrapper}>
              <div></div>
              <img src={ServiceImage4} alt="Services" />
            </div>
          </div>
          <div>
            <div className={styles.serviceImgWrapper}>
              <div></div>
              <img src={ServiceImage1} alt="Services" />
            </div>
            <div className={styles.serviceImgWrapper}>
              <div></div>
              <img src={ServiceImage2} alt="Services" />
            </div>
          </div>
        </div>
        <div className={styles.servicesContent}>
          <div className={styles.contentContainer}>
            <h2>
              We Deliver <br /> Digital Productivity
            </h2>
            <p>
              We craft technology solutions that digitally bond and transform the productivity of our customers and
              their citizens, workers, consumers and partners.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
