import * as React from 'react';


type Props = {
  children: React.ReactNode;
}

const Footer: React.FC<Props> = ({children}: Props) => {

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
