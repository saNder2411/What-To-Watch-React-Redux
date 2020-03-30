import React, {memo} from 'react';


import {CardMode} from '../../const';


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

export default memo(CardTabsNav);
