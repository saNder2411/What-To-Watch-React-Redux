import * as React from 'react';



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

export default Footer;
