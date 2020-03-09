import React, {Fragment} from 'react';
import WithPreviewCardsListState from '../../hocs/with-preview-cards-list-state/with-preview-cards-list-state.jsx';
import GenresList from '../genres-list/genres-list.jsx';
import MainHeader from '../main-header/main-header.jsx';
import withData from '../../hocs/with-data/with-data.jsx';
import withActiveItem from '../../hocs/with-active-item/with-active-item.jsx';
import ShowMoreButton from '../show-more-button/show-more-button.jsx';
import Footer from '../footer/footer.jsx';
import {DataTypes} from '../../const.js';

const WrappedMainHeader = withData(MainHeader, DataTypes.PROMO_DATA);
const WrappedGenreList = withData(withActiveItem(GenresList), DataTypes.CARDS_DATA);
const WrappedPreviewCardsList = withActiveItem(WithPreviewCardsListState);

const Main = () => {
  return (
    <Fragment>
      <WrappedMainHeader/>

      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>

          <WrappedGenreList/>
          <WrappedPreviewCardsList />
          <ShowMoreButton />

        </section>

        <Footer />
      </div>
    </Fragment>
  );
};

export default Main;
