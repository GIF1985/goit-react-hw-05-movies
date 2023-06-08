import { Link } from 'react-router-dom';
import style from './MovieGallery.module.css';
import PropTypes from 'prop-types';

export const MovieGallery = ({ movies, prevLocation }) => {
  const renderGallery = () =>
    movies.map(({ id, title }) => (
      <li key={id} className={style.galleryListItem}>
        <Link
          to={`/movies/${id}`}
          state={{ from: prevLocation }}
          className={style.link}
        >
          {title}
        </Link>
      </li>
    ));

  return (
    <div>
      <ul className={style.galleryList}>{movies ? renderGallery() : null}</ul>
    </div>
  );
};

MovieGallery.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
    }).isRequired
  ),
};

export default MovieGallery;
