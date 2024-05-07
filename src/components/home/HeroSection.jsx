
import Container from '../shared/Container/Container';
import styles from './home.module.css';
import {useState} from 'react';
import {HeroData} from '../../data/Data';
import BulletSelection from '../shared/BulletSelection';
import PrymaryButton from '../shared/Button/PrimaryButton';
import PlayDemoIcon from '../../images/Icons/play.svg';

const HeroSection = () => {
  const [heroIndex, setHeroIndex] = useState(0);
  const theme = {color: HeroData[heroIndex].themeColor};
  const handleSelect = (i) => {
    setHeroIndex(i);
  };
  const isActive = (i) => {
    return i === heroIndex ? styles.active : "";
  };
  return (
    <Container className={styles.heroSection}>
      <div className={styles.heroContent}>
        <h3 style={theme}>{HeroData[heroIndex].title}</h3>
        <h1>
          <div dangerouslySetInnerHTML={{__html: HeroData[heroIndex].subTitle}} />
          <img src={HeroData[heroIndex].lineIcon} alt="Icon" />
        </h1>
        <p>{HeroData[heroIndex].body}</p>
        <div className={styles.buttonContainer}>
          <PrymaryButton text={'Find out more'} />
          <button>
            <img src={PlayDemoIcon} alt="Demo" />
            <span>Play Demo</span>
          </button>
        </div>
        <BulletSelection
          data={HeroData}
          handleSelect={handleSelect}
          isActive={isActive}
          className={styles.bulletContainer}
        />
      </div>
      <div className={styles.heroImage}>
        <img src={HeroData[heroIndex].image} alt="Hero Image" />
        <img src={HeroData[heroIndex].animatedImg} alt="Animated Img" className={styles.AnimatedImg} />
      </div>
    </Container>
  );
};
export default HeroSection;

