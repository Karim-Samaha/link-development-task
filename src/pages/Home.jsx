import Layout from "../components/layout/Layout";
import Container from "../components/shared/Container/Container";
import styles from "./../components/layout/layout.module.css";
import "../styles.css";
const Home = () => {
  return (
    <Layout>
      <section className={styles.pageContainer}>
        <Container>.</Container>
      </section>
    </Layout>
  );
};

export default Home;
