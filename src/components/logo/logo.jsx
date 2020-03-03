import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import ActionCreator from '../../actions/action-creator.js';
import {DEFAULT_GENRE} from '../../const.js';

const Logo = ({isCardScreen, isFooterLogo, changeGenre}) => {
  const onClick = isCardScreen ? () => changeGenre(DEFAULT_GENRE) : (evt) => evt.preventDefault();
  const footerLogoClass = isFooterLogo ? `logo__link--light` : ``;

  return (
    <div className="logo">
      <Link
        to="/"
        className={`logo__link ${footerLogoClass}`}
        onClick={onClick}
      >
        <span className="logo__letter logo__letter--1">W</span>
        <span className="logo__letter logo__letter--2">T</span>
        <span className="logo__letter logo__letter--3">W</span>
      </Link>
    </div>
  );
};

Logo.propTypes = {
  isCardScreen: PropTypes.bool,
  isFooterLogo: PropTypes.bool,
  changeGenre: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  changeGenre: (genre) => {
    dispatch(ActionCreator.changeGenre(genre));
  }
});

export default connect(undefined, mapDispatchToProps)(Logo);
