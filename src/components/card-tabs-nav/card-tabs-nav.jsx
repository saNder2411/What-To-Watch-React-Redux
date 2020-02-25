import React from 'react';
import PropTypes from 'prop-types';
import {CardMode} from '../../const.js';

const CardTabsNav = ({mode, onTabsNavClick}) => {

  return (
    <nav className="movie-nav movie-card__nav">
      <ul
        onClick={onTabsNavClick}
        className="movie-nav__list">
        <li className={`${`movie-nav__item`} ${CardMode.OVERVIEW === mode ? `movie-nav__item--active` : ``}`}>
          <a href="#" className="movie-nav__link">Overview</a>
        </li>
        <li className={`${`movie-nav__item`} ${CardMode.DETAILS === mode ? `movie-nav__item--active` : ``}`}>
          <a href="#" className="movie-nav__link">Details</a>
        </li>
        <li className={`${`movie-nav__item`} ${CardMode.REVIEWS === mode ? `movie-nav__item--active` : ``}`}>
          <a href="#" className="movie-nav__link">Reviews</a>
        </li>
      </ul>
    </nav>
  );
};

CardTabsNav.propTypes = {
  mode: PropTypes.string.isRequired,
  onTabsNavClick: PropTypes.func.isRequired,
};

export default CardTabsNav;
