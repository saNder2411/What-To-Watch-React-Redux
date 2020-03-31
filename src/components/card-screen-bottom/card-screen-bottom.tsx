import * as React from 'react';

type Props = {children: Array<React.ReactNode>}

const CardScreenBottom: React.FC<Props> = ({children}: Props) => {

  const [WrappedPreviewCardsList, Footer] = children;

  return (
    <div className="page-content">
      <section className="catalog catalog--like-this">
        <h2 className="catalog__title">More like this</h2>
        {WrappedPreviewCardsList}
      </section>
      {Footer}
    </div>
  );
};


export default CardScreenBottom;
