import { Link } from "react-router-dom";
import LogoImage from "../../images/Logo.png";

const Logo = () => {
  return (
    <Link href={"#"}>
      <img src={LogoImage} alt="Logo" />
    </Link>
  );
};

export default Logo;
