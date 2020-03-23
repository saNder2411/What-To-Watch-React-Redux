import React, {Fragment} from 'react';

import MainHeader from '../main-header/main-header.jsx';
import MainContent from '../main-content/main-content.jsx';
import PreviewCardList from '../preview-card-list/preview-card-list.jsx';
import GenreList from '../genre-list/genre-list.jsx';
import ShowMoreButton from '../show-more-button/show-more-button.jsx';
import Footer from '../footer/footer.jsx';
import Logo from '../logo/logo.jsx';

import compose from '../../hocs/compose/compose.js';
import withFetchData from '../../hocs/with-fetch-data/with-fetch-data.jsx';
import withActiveItem from '../../hocs/with-active-item/with-active-item.jsx';
import withPreviewCardListState from '../../hocs/with-preview-card-list-state/with-preview-card-list-state.jsx';

import {DataTypes, ComponentTypes} from '../../const.js';


const WrappedMainHeader = withFetchData(DataTypes.FETCH_PROMO_DATA)(MainHeader);

const WrappedGenreList = compose(
    withFetchData(DataTypes.FETCH_CARDS_DATA),
    withActiveItem(ComponentTypes.GENRES_LIST))(GenreList);

const WrappedPreviewCardList = compose(
    withActiveItem(ComponentTypes.PREVIEW_CARDS_LIST),
    withPreviewCardListState)(PreviewCardList);

const Main = () => {

  return (
    <Fragment>
      <WrappedMainHeader/>

      <MainContent>
        <WrappedGenreList/>
        <WrappedPreviewCardList />
        <ShowMoreButton />
        <Footer>
          <Logo isFooterLogo/>
        </Footer>
      </MainContent>
    </Fragment>
  );
};

export default Main;
