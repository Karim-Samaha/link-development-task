import Layout from '../components/layout/Layout';
import styles from './../components/layout/layout.module.css';
import '../styles.css';
import HeroSection from '../components/home/HeroSection';
import Services from '../components/home/Services';
import NewsSection from '../components/home/News';
import {Helmet} from 'react-helmet';
import LogoImage from "../images/Logo.png";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Link Development</title>
        <link rel="icon" type="image/x-icon" href={LogoImage} />
      </Helmet>
      <Layout>
        <section className={styles.pageContainer}>
          <HeroSection />
          <Services />
          <NewsSection />
        </section>
      </Layout>
    </>
  );
};

export default Home;
