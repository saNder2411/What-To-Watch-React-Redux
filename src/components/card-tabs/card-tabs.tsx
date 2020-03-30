import * as React from 'react';


import CardTabsNav from '../card-tabs-nav/card-tabs-nav';


const CardTabs = ({mode, onTabsNavClick, children}) => {

  return (
    <div className="movie-card__desc">
      <CardTabsNav mode={mode} onTabsNavClick={onTabsNavClick}/>
      {children}
    </div>
  );
};

export default CardTabs;
