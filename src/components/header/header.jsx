import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import Logo from '../logo/logo.jsx';

const Header = ({isCardScreen}) => {
  return (
    <Fragment>
      <div className="movie-card__bg">
        <img src="img/bg-the-grand-budapest-hotel.jpg" alt="The Grand Budapest Hotel" />
      </div>

      <h1 className="visually-hidden">WTW</h1>

      <header className="page-header movie-card__head">

        <Logo isCardScreen={isCardScreen}/>

        <div className="user-block">
          <div className="user-block__avatar">
            <img src="img/avatar.jpg" alt="User avatar" width="63" height="63" />
          </div>
        </div>
      </header>
    </Fragment>
  );
};

Header.propTypes = {
  isCardScreen: PropTypes.bool,
};

export default Header;
