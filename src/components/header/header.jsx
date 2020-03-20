import React, {Fragment} from 'react';
import PropTypes from 'prop-types';

const Header = ({title, backgroundImage, children}) => {
  const [Logo, UserBlock] = children;
  return (
    <Fragment>
      <div className="movie-card__bg">
        <img src={backgroundImage} alt={title} />
      </div>
      <h1 className="visually-hidden">WTW</h1>
      <header className="page-header movie-card__head">
        {Logo}
        {UserBlock}
      </header>
    </Fragment>
  );
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
  backgroundImage: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired,
};

export default Header;
