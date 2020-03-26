import React, {Fragment} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import CardScreenTop from '../card-screen-top/card-screen-top.jsx';
import CardScreenHeader from '../card-screen-header/card-screen-header.jsx';
import Header from '../header/header.jsx';
import Logo from '../logo/logo.jsx';
import UserBlock from '../user-block/user-block.jsx';
import HeaderCardDesc from '../header-card-desc/header-card-desc.jsx';
import HeaderButtons from '../header-buttons/header-buttons.jsx';
import Poster from '../poster/poster.jsx';
import CardTabs from '../card-tabs/card-tabs.jsx';
import CardOverview from '../../components/card-overview/card-overview.jsx';
import CardDetails from '../../components/card-details/card-details.jsx';
import CardReviews from '../../components/card-reviews/card-reviews.jsx';
import CardScreenBottom from '../card-screen-bottom/card-screen-bottom.jsx';
import PreviewCardList from '../preview-card-list/preview-card-list.jsx';
import Footer from '../footer/footer.jsx';

import compose from '../../hocs/compose/compose.js';
import withCardTabsState from '../../hocs/with-card-tabs-state/with-card-tabs-state.jsx';
import withPreviewCardListState from '../../hocs/with-preview-card-list-state/with-preview-card-list-state.jsx';
import withFetchData from '../../hocs/with-fetch-data/with-fetch-data.jsx';
import withActiveItem from '../../hocs/with-active-item/with-active-item.jsx';
import {getSelectedCard} from '../../reducers/app-state/selectors';

import {DataTypes} from '../../const.js';


const WrappedCardTabs = withCardTabsState(CardTabs);

const WrappedCardReviews = withFetchData(DataTypes.FETCH_REVIEWS_DATA)(CardReviews);

const WrappedPreviewCardList = compose(withActiveItem, withPreviewCardListState)(PreviewCardList);

const CardScreen = ({selectedCard}) => {
  const {title, posterImage, genre, released, backgroundImage} = selectedCard;

  return (
    <Fragment>
      <CardScreenTop>
        <CardScreenHeader >
          <Header title={title} backgroundImage={backgroundImage}>
            <Logo />
            <UserBlock />
          </Header>
          <HeaderCardDesc title={title} genre={genre} released={released} >
            <HeaderButtons />
          </HeaderCardDesc>
        </CardScreenHeader>
        <Poster posterImage={posterImage} title={title}/>
        <WrappedCardTabs >
          <CardOverview {...selectedCard} />
          <CardDetails {...selectedCard} />
          <WrappedCardReviews />
        </WrappedCardTabs>
      </CardScreenTop>

      <CardScreenBottom>
        <WrappedPreviewCardList />
        <Footer>
          <Logo isFooterLogo/>
        </Footer>
      </CardScreenBottom>
    </Fragment>
  );
};

CardScreen.propTypes = {
  selectedCard: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({selectedCard: getSelectedCard(state)});

export default connect(mapStateToProps)(CardScreen);
