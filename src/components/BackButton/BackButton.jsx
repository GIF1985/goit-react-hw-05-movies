import { Link, useLocation } from 'react-router-dom';
import styles from './BackButton.module.css';

export default function BackButton() {
  const { state } = useLocation();
  return (
    state?.from && (
      <Link to={state.from} className={styles.backButton}>
        <button className={styles.button} type="button">
          <span>Go back</span>
        </button>
      </Link>
    )
  );
}
