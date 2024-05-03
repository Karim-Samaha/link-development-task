import Nav from "./Nav";
import Footer from "./Footer";
import styles from "./layout.module.css";
const Layout = ({ children }) => {
  return (
    <section>
      <Nav />
      {children}
      <Footer />
    </section>
  );
};

export default Layout;
