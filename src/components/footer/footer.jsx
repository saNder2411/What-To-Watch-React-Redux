import React from 'react';
import PropTypes from 'prop-types';
import Logo from '../logo/logo.jsx';

const Footer = ({isCardScreen}) => {
  return (
    <footer className="page-footer">
      <Logo isCardScreen={isCardScreen} isFooterLogo />

      <div className="copyright">
        <p>© 2019 What to watch Ltd.</p>
      </div>
    </footer>
  );
};

Footer.propTypes = {
  isCardScreen: PropTypes.bool,
};

export default Footer;
