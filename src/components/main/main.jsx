import React, {Fragment} from 'react';
import WithPreviewCardsListState from '../../hocs/with-preview-cards-list-state/with-preview-cards-list-state.jsx';
import WithGenresListState from '../../hocs/with-genres-list-state/with-genres-list-state.jsx';
import MainHeader from '../main-header/main-header.jsx';
import ShowMoreButton from '../show-more-button/show-more-button.jsx';
import Footer from '../footer/footer.jsx';

const Main = () => {
  return (
    <Fragment>
      <MainHeader/>

      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>

          <WithGenresListState/>
          <WithPreviewCardsListState />
          <ShowMoreButton />

        </section>

        <Footer />
      </div>
    </Fragment>
  );
};

export default Main;
