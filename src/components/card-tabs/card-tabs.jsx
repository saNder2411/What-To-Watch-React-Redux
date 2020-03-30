import React from 'react';
import PropTypes from 'prop-types';

import CardTabsNav from '../card-tabs-nav/card-tabs-nav';


const CardTabs = ({mode, onTabsNavClick, children}) => {

  return (
    <div className="movie-card__desc">
      <CardTabsNav mode={mode} onTabsNavClick={onTabsNavClick}/>
      {children}
    </div>
  );
};

CardTabs.propTypes = {
  mode: PropTypes.string.isRequired,
  onTabsNavClick: PropTypes.func.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired,
};

export default CardTabs;
