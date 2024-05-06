import Container from "../shared/Container/Container";
import Logo from "../shared/Logo";
import FacebookLogo from "../../images/Icons/Social-fc.svg";
import InstaLogo from "../../images/Icons/Social-ins.svg";
import TwitterLogo from "../../images/Icons/Social-tw.svg";
import GooglePlayLogo from "../../images/Icons/Google Play.svg";
import AppStoreLogo from "../../images/Icons/Play Store.svg";
import styles from "./layout.module.css";

import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Container className={styles["footer-container"]}>
        <div className={styles.footerSection}>
          <Logo />
          <p>
            We make technology produce productive, adaptable and sustainable
            business experiences.
          </p>
        </div>
        <div className={styles.footerSection}>
          <table>
            <tr>
              <th>Company</th>
              <th>Contact</th>
              <th> Media</th>
            </tr>
            <tr>
              <td><Link>About</Link></td>
              <td><Link>Help/FAQ</Link></td>
              <td><Link>News</Link></td>
            </tr>
            <tr>
              <td><Link>Careers</Link></td>
              <td><Link>Press</Link></td>
              <td><Link>Photo</Link></td>
            </tr>
            <tr>
              <td><Link>Mobile</Link></td>
              <td><Link>Affilates</Link></td>
              <td><Link>Video</Link></td>
            </tr>
          </table>
        </div>
        <div className={styles.footerSection}>
          <div className={styles.socialLinks}>
            <a href="#" target="_blank">
              <img src={FacebookLogo} alt="Facebook" />
            </a>
            <a href="#" target="_blank">
              <img src={InstaLogo} alt="Insta" />
            </a>
            <a href="#" target="_blank">
              <img src={TwitterLogo} alt="Twitter" />
            </a>
          </div>
          <h4>Discover our app</h4>
          <div className={styles.appLinks}>
            <a href="#" target="_blank">
              <img src={GooglePlayLogo} alt="Google Play" />
            </a>
            <a href="#" target="_blank">
              <img src={AppStoreLogo} alt="App Store" />
            </a>
          </div>
        </div>
        <div className={styles.footerSection}>
          <p>All rights reserved@Linkdevelopment.com</p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
