import React from 'react';
import PropTypes from 'prop-types';

const Footer = ({children}) => {
  return (
    <footer className="page-footer">
      {children}
      <div className="copyright">
        <p>© 2019 What to watch Ltd.</p>
      </div>
    </footer>
  );
};

Footer.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired,
};

export default Footer;
