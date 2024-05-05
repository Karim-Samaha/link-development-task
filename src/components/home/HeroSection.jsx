import Container from '../shared/Container/Container';
import styles from './home.module.css';
import {useState} from 'react';
import Link from '../../images/Vector.png';
import {HeroData} from '../../data/Data';
import BulletSelection from '../shared/BulletSelection';
const HeroSection = () => {
  const [heroIndex, setHeroIndex] = useState(1);
  const theme = {color: HeroData[heroIndex].themeColor};
  const handleSelect = (i) => {
    setHeroIndex(i);
  };
  const isActive = (i) => {
    return i === heroIndex && styles.active;
  };
  return (
    <Container className={styles.heroSection}>
      <div className={styles.heroContent}>
        <h3 style={theme}>{HeroData[heroIndex].title}</h3>
        <h1>
          {HeroData[heroIndex].subTitle}
          <img src={Link} alt="Icon" />
        </h1>
        <p>{HeroData[heroIndex].body}</p>
        <div className={styles.buttonContainer}>
          <button>Find out more</button>
          <button>Play Demo</button>
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
        <img src={HeroData[heroIndex].animatedImg} alt="Animated Img"  className={styles.AnimatedImg}/>
      </div>
    </Container>
  );
};
export default HeroSection;
