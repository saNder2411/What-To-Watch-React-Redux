import React, {Fragment} from 'react';

import MainHeader from '../main-header/main-header.jsx';
import MainContent from '../main-content/main-content.jsx';
import PreviewCardList from '../preview-card-list/preview-card-list.jsx';
import GenreList from '../genre-list/genre-list.jsx';
import ShowMoreButton from '../show-more-button/show-more-button.jsx';
import Footer from '../footer/footer.jsx';
import Logo from '../logo/logo.jsx';

import compose from '../../hocs/compose/compose.js';
import withActiveItem from '../../hocs/with-active-item/with-active-item.jsx';
import withPreviewCardListState from '../../hocs/with-preview-card-list-state/with-preview-card-list-state.jsx';


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
