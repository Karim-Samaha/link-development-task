import Container from "../shared/Container/Container";
import styles from "./home.module.css";
import HeroImage1 from "../../images/Image (1).png";
import { useState } from "react";
import AnimatedImg1 from "../../images/Decore.png";
import AnimatedImg2 from "../../images/Decore.svg";
import AnimatedImg3 from "../../images/Decore (2).svg";
import Link from "../../images/Vector.png";

const HeroData = [
  {
    id: "1",
    title: "MARKING",
    subTitle: "25 Years of Business Growth",
    body: "Link Development, the global technology solutions provider and an A15 company, unveiled today that it has recently marked its Silver Jubilee anniversary.",
    image: HeroImage1,
    themeColor: "#f215b6",
    animatedImg: AnimatedImg1,
  },
  {
    id: "2",
    title: "Crafty Minds Reshaping Future",
    subTitle: "25 Years of Business Growth",
    body: "Link Development,Our people, processes, and technologies thrive on digital breakthroughs.",
    image: HeroImage1,
    themeColor: "#A6E51C",
    animatedImg: AnimatedImg2,
  },
  {
    id: "3",
    title: "OUTSOURCE",
    subTitle: "Global IT Experts",
    body: "On-shore, offshore, nearshore and hybrid models for dedicated development, product building and staff augmentation.",
    image: HeroImage1,
    themeColor: "#FF7C16",
    animatedImg: AnimatedImg3,
  },
];
const HeroSection = () => {
  const [heroIndex, setHeroIndex] = useState(0);
  const theme = { color: HeroData[heroIndex].themeColor };
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
        <div className={styles.bulletContainer}>
          {HeroData.map((item, i) => {
            if (i === HeroData.length - 1) {
              return <div onClick={() => setHeroIndex(i)}></div>;
            } else {
              return (
                <>
                  <div
                    onClick={() => setHeroIndex(i)}
                    className={i === heroIndex && styles.active}
                  ></div>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                </>
              );
            }
          })}
        </div>
      </div>
      <div className={styles.heroImage}>
        <img src={HeroData[heroIndex].image} alt="Hero Image" />
        <img
          src={HeroData[heroIndex].animatedImg}
          alt="Img"
          className={styles.AnimatedImg}
        />
      </div>
    </Container>
  );
};
export default HeroSection;
