import React, {Fragment} from 'react';

import MainHeader from '../main-header/main-header.jsx';
import MainContent from '../main-content/main-content.jsx';
import PreviewCardsList from '../preview-cards-list/preview-cards-list.jsx';
import GenresList from '../genres-list/genres-list.jsx';
import ShowMoreButton from '../show-more-button/show-more-button.jsx';
import Footer from '../footer/footer.jsx';

import compose from '../../hocs/compose/compose.js';
import withData from '../../hocs/with-data/with-data.jsx';
import withActiveItem from '../../hocs/with-active-item/with-active-item.jsx';
import withPreviewCardsListState from '../../hocs/with-preview-cards-list-state/with-preview-cards-list-state.jsx';

import {DataTypes, ComponentTypes} from '../../const.js';

const WrappedMainHeader = withData(DataTypes.PROMO_DATA)(MainHeader);
const WrappedGenreList = compose(withData(DataTypes.CARDS_DATA), withActiveItem(ComponentTypes.GENRES_LIST))(GenresList);
const WrappedPreviewCardsList = compose(withActiveItem(ComponentTypes.PREVIEW_CARDS_LIST), withPreviewCardsListState)(PreviewCardsList);

const Main = () => {
  return (
    <Fragment>
      <WrappedMainHeader/>
      <MainContent>
        <WrappedGenreList/>
        <WrappedPreviewCardsList />
        <ShowMoreButton />
        <Footer />
      </MainContent>
    </Fragment>
  );
};

export default Main;
