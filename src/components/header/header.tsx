import * as React from 'react';


type Props = {
  title: string;
  backgroundImage: string;
  children: Array<React.ReactNode>;
}

const Header: React.FC<Props> = ({title, backgroundImage, children}: Props) => {

  const [Logo, UserBlock, AddReviewBreadcrumbs] = children;

  const headerClassName = AddReviewBreadcrumbs ? `page-header` : `page-header movie-card__head`;

  return (
    <React.Fragment>
      <div className="movie-card__bg">
        <img src={backgroundImage} alt={title} />
      </div>
      <h1 className="visually-hidden">WTW</h1>
      <header className={headerClassName}>
        {Logo}
        {AddReviewBreadcrumbs ? AddReviewBreadcrumbs : null}
        {UserBlock}
      </header>
    </React.Fragment>
  );
};


export default Header;
