import PropTypes from 'prop-types';
import defaultPortrait from './default-portrait.jpg';
import styles from './Cast.module.css';

export default function Cast({ actors }) {
  return (
    <div className={styles.cast}>
      <ul className={styles.castList}>
        {actors.map(({ profile_path, name, character, id }) => {
          const avatar = profile_path
            ? `https://image.tmdb.org/t/p/w500${profile_path}`
            : defaultPortrait;
          return (
            <li className={styles.castListItem} key={id}>
              <img
                className={styles.castListItemAvatar}
                src={avatar}
                alt={name}
              />
              <div className={styles.castListItemText}>
                <p className={styles.castListItemName}>Actor Name: {name}</p>
                <p className={styles.castListItemCharacter}>
                  Character: {character}
                </p>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

Cast.propTypes = {
  actors: PropTypes.arrayOf(
    PropTypes.shape({
      profile_path: PropTypes.string,
      character: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
    })
  ),
};
