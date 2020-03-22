import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';


const Logo = ({toMain, isFooterLogo}) => {

  const onClick = toMain ? () => {} : (evt) => evt.preventDefault();
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
  toMain: PropTypes.bool,
  isFooterLogo: PropTypes.bool,
};

export default Logo;
