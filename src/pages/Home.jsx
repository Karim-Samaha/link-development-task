import Layout from '../components/layout/Layout';
import styles from './../components/layout/layout.module.css';
import '../styles.css';
import HeroSection from '../components/home/HeroSection';
import Services from '../components/home/Services';
import NewsSection from '../components/home/News';
const Home = () => {
  return (
    <Layout>
      <section className={styles.pageContainer}>
        <HeroSection />
        <Services />
        <NewsSection />
      </section>
    </Layout>
  );
};

export default Home;
