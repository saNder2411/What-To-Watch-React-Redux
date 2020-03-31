import * as React from 'react';
import CardTabsNav from '../card-tabs-nav/card-tabs-nav';


type Props = {
  mode: string;
  onTabsNavClick: (evt: React.SyntheticEvent, mode: string) => void;
}

const CardTabs: React.FC<Props> = ({mode, onTabsNavClick, children}) => {

  return (
    <div className="movie-card__desc">
      <CardTabsNav mode={mode} onTabsNavClick={onTabsNavClick}/>
      {children}
    </div>
  );
};

export default CardTabs;
