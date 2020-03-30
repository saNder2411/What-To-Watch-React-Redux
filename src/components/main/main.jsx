import React, {Fragment} from 'react';

import MainHeader from '../main-header/main-header';
import MainContent from '../main-content/main-content';
import PreviewCardList from '../preview-card-list/preview-card-list';
import GenreList from '../genre-list/genre-list';
import ShowMoreButton from '../show-more-button/show-more-button';
import Footer from '../footer/footer';
import Logo from '../logo/logo';

import compose from '../../hocs/compose/compose';
import withActiveItem from '../../hocs/with-active-item/with-active-item';
import withPreviewCardListState from '../../hocs/with-preview-card-list-state/with-preview-card-list-state';


const WrappedGenreList = withActiveItem(GenreList);
const WrappedPreviewCardList = compose(withActiveItem, withPreviewCardListState)(PreviewCardList);

const Main = () => {

  return (
    <Fragment>
      <MainHeader/>
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
