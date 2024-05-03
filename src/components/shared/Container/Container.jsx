import styles from "./container.module.css";
const Container = ({ children, className }) => {
  return <div className={`${styles.container} ${className}`}>{children}</div>;
};

export default Container;
