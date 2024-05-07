import styles from './home.module.css';
import ThingsWeDoImg from '../../images/Things _We Do.svg';
import ServiceImage1 from '../../images/Services/CarftyMind.png';
import ServiceImage2 from '../../images/Services/Enovision.jpeg';
import ServiceImage3 from '../../images/Services/Dynamic365.jpeg';
import ServiceImage4 from '../../images/Services/Services (1).jpeg';
import ServiceImage5 from '../../images/Services/Transformation (1).jpeg';
import ArrowIcon from '../../images/Icons/right-arrow.svg';
import {Link} from 'react-router-dom';

const Services = () => {
  const renderServicesItems = () => {
    return (
      <div className={styles.servcesImages}>
        <div>
          <Link to={'#'}>
            <div className={styles.serviceImgWrapper}>
              <div>
                <span>
                  <img src={ArrowIcon} alt="Arrow" />
                  Read more
                </span>
              </div>
              <img src={ServiceImage5} alt="Services" />{' '}
            </div>
          </Link>
        </div>

        <div>
          <Link to={'#'}>
            <div className={styles.serviceImgWrapper}>
              <div>
                <span>
                  <img src={ArrowIcon} alt="Arrow" />
                  Read more
                </span>{' '}
              </div>
              <img src={ServiceImage2} alt="Services" />
            </div>
          </Link>
          <Link to={'#'}>
            <div className={styles.serviceImgWrapper}>
              <div>
                <span>
                  <img src={ArrowIcon} alt="Arrow" />
                  Read more
                </span>{' '}
              </div>
              <img src={ServiceImage3} alt="Services" />
            </div>
          </Link>
        </div>
        <div>
        <Link to={'#'}>
            <div className={styles.serviceImgWrapper}>
              <div>
                <span>
                  <img src={ArrowIcon} alt="Arrow" />
                  Read more
                </span>{' '}
              </div>
              <img src={ServiceImage1} alt="Services" />
            </div>
          </Link>
          <Link to={'#'}>
            <div className={styles.serviceImgWrapper}>
              <div>
                <span>
                  <img src={ArrowIcon} alt="Arrow" />
                  Read more
                </span>{' '}
              </div>
              <img src={ServiceImage4} alt="Services" />
            </div>
          </Link>
        </div>
      </div>
    );
  };
  return (
    <section className={styles.servicesWrapper}>
      <div className={styles.servcesContainer}>
        <img src={ThingsWeDoImg} alt="Things We Do" />
        {renderServicesItems()}
        <div className={styles.servicesContent}>
          <div className={styles.contentContainer}>
            <h2>
              We Deliver <br /> Digital Productivity
            </h2>
            <p>
              We craft technology solutions that digitally <br/> bond and transform the productivity of <br/> our customers and
              their citizens, workers, <br/> consumers and partners.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
