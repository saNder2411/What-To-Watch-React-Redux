import React, {Fragment} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import CardScreenTop from '../card-screen-top/card-screen-top';
import CardScreenHeader from '../card-screen-header/card-screen-header';
import Header from '../header/header';
import Logo from '../logo/logo';
import UserBlock from '../user-block/user-block';
import HeaderCardDesc from '../header-card-desc/header-card-desc';
import HeaderButtons from '../header-buttons/header-buttons';
import Poster from '../poster/poster';
import CardTabs from '../card-tabs/card-tabs';
import CardOverview from '../../components/card-overview/card-overview';
import CardDetails from '../../components/card-details/card-details';
import CardReviews from '../../components/card-reviews/card-reviews';
import CardScreenBottom from '../card-screen-bottom/card-screen-bottom';
import PreviewCardList from '../preview-card-list/preview-card-list';
import Footer from '../footer/footer';

import compose from '../../hocs/compose/compose';
import withCardTabsState from '../../hocs/with-card-tabs-state/with-card-tabs-state';
import withPreviewCardListState from '../../hocs/with-preview-card-list-state/with-preview-card-list-state';
import withFetchData from '../../hocs/with-fetch-data/with-fetch-data';
import withActiveItem from '../../hocs/with-active-item/with-active-item';
import {getSelectedCard} from '../../reducers/app-state/selectors';

import {DataTypes} from '../../const';


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
