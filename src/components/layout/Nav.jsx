import Container from "../shared/Container/Container";
import styles from "./layout.module.css";
import { Link } from "react-router-dom";
import Logo from "../shared/Logo";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
import ArrowIcon from '../../images/Icons/arrow-down.svg';

const Links = [
  {
    id: "1",
    title: "Home",
    path: "/",
  },
  {
    id: "2",
    title: "About us",
    path: "/",
  },
  {
    id: "3",
    title: "News",
    path: "/",
  },
  {
    id: "4",
    title: "Contact us",
    path: "/",
  },
  {
    id: "5",
    title: "Login",
    path: "/",
  },
  {
    id: "6",
    title: "Sign up",
    path: "/",
  },
];
const Nav = () => {
  const options = ["En", "Ar"];
  return (
    <Container>
      <nav className={styles.nav}>
        <Logo />
        <ul className={styles.navLinks}>
          {Links.map((item) => {
            return (
              <li key={item.id}>
                <Link to={item.path}>{item.title}</Link>
              </li>
            );
          })}
          <Dropdown
            options={options}
            onChange={() => null}
            placeholder="En"
            className={styles.dropdown}
            arrowClosed={<span><img src={ArrowIcon} alt="Drop Down" /></span>}
            arrowOpen={<span><img src={ArrowIcon} alt="Drop Down" /></span>}
          />
          {/*  */}
        </ul>
      </nav>
    </Container>
  );
};

export default Nav;
