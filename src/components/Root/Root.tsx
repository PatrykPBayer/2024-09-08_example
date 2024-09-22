import { Link, Outlet } from "react-router-dom";
import styles from "./Root.module.css";

export const Root = () => {
  return (
    <div>
      <nav className={styles.menu}>
        <Link to="/" className={styles.link}>
          Home page
        </Link>
        <Link to="/offer/1" className={styles.link}>
          Offer 1
        </Link>
        <Link to="/offer/2" className={styles.link}>
          Offer 2
        </Link>
        <Link to="/offer/15" className={styles.link}>
          Offer 15
        </Link>
      </nav>
      <Outlet />
    </div>
  );
};
