import Nav from "./Nav";
import Footer from "./Footer";
import styles from "./layout.module.css";
const Layout = ({ children }) => {
  return (
    <section style={{ overflowX: "hidden", }}>
      <Nav />
      {children}
      <Footer />
    </section>
  );
};

export default Layout;
