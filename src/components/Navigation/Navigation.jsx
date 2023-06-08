import { NavLink } from 'react-router-dom';
import styles from './Navigation.module.css';

export default function Navigation() {
  return (
    <nav>
      <ul className={styles.navigation}>
        <li>
          <NavLink
            to="/"
            activeClassName={styles.active}
            className={styles.link}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/movies"
            activeClassName={styles.active}
            className={styles.link}
          >
            Movies
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
