import React, {memo} from 'react';
import PropTypes from 'prop-types';

import {CardMode} from '../../const.js';


const NuvButtonsData = [
  {name: CardMode.OVERVIEW, LABEL: `Overview`},
  {name: CardMode.DETAILS, LABEL: `Details`},
  {name: CardMode.REVIEWS, LABEL: `Reviews`},
];

const CardTabsNav = ({mode, onTabsNavClick}) => {

  const navButtons = NuvButtonsData.map(({name, LABEL}) => {
    const isActiveClass = name === mode ? `movie-nav__item--active` : ``;

    return (
      <li className={`${`movie-nav__item`} ${isActiveClass}`} key={name}>
        <a
          href="#"
          className="movie-nav__link"
          onClick={(evt) => onTabsNavClick(evt, name)}
        >
          {LABEL}
        </a>
      </li>
    );
  });

  return (
    <nav className="movie-nav movie-card__nav">
      <ul className="movie-nav__list">
        {navButtons}
      </ul>
    </nav>
  );
};

CardTabsNav.propTypes = {
  mode: PropTypes.string.isRequired,
  onTabsNavClick: PropTypes.func.isRequired,
};

export default memo(CardTabsNav);
