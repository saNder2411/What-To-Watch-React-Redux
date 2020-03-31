import * as React from 'react';
import CardTabsNav from '../card-tabs-nav/card-tabs-nav';


type Props = {
  mode: string;
  onTabsNavClick: (evt: React.SyntheticEvent, mode: string) => void;
  children: React.ReactNode;
}

const CardTabs: React.FC<Props> = ({mode, onTabsNavClick, children}: Props) => {

  return (
    <div className="movie-card__desc">
      <CardTabsNav mode={mode} onTabsNavClick={onTabsNavClick}/>
      {children}
    </div>
  );
};

export default CardTabs;
