import React, {Fragment} from 'react';
import PropTypes from 'prop-types';


const Header = ({title, backgroundImage, children}) => {

  const [Logo, UserBlock, AddReviewBreadcrumbs] = children;

  const headerClassName = AddReviewBreadcrumbs ? `page-header` : `page-header movie-card__head`;

  return (
    <Fragment>
      <div className="movie-card__bg">
        <img src={backgroundImage} alt={title} />
      </div>
      <h1 className="visually-hidden">WTW</h1>
      <header className={headerClassName}>
        {Logo}
        {AddReviewBreadcrumbs ? AddReviewBreadcrumbs : null}
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
