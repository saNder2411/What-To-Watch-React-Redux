import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import CardTabs from '../card-tabs/card-tabs.jsx';
import withCardTabsState from '../../hocs/with-card-tabs-state/with-card-tabs-state.jsx';
import WithPreviewCardsListState from '../../hocs/with-preview-cards-list-state/with-preview-cards-list-state.jsx';
import withActiveItem from '../../hocs/with-active-item/with-active-item.jsx';
import CardScreenHeader from '../card-screen-header/card-screen-header.jsx';
import CardScreenTop from '../card-screen-top/card-screen-top.jsx';
import Header from '../header/header.jsx';
import HeaderCardDesc from '../header-card-desc/header-card-desc.jsx';
import HeaderButtons from '../header-buttons/header-buttons.jsx';
import CardScreenBottom from '../card-screen-bottom/card-screen-bottom.jsx';
import Poster from '../poster/poster.jsx';
import Footer from '../footer/footer.jsx';

const WrappedCardTabs = withCardTabsState(CardTabs);
const WrappedPreviewCardsList = withActiveItem(WithPreviewCardsListState);

const CardScreen = ({selectedCardId, cardsData}) => {
  const selectedCard = cardsData.find(({id}) => +selectedCardId === id);
  const {title, previewPoster, genre, release} = selectedCard;
  const yearRelease = new Date(release).getFullYear();

  return (
    <Fragment>
      <CardScreenTop>
        <CardScreenHeader >
          <Header isCardScreen />
          <HeaderCardDesc title={title} genre={genre} date={yearRelease} >
            <HeaderButtons isCardScreen selectedCardId={selectedCardId}/>
          </HeaderCardDesc>
        </CardScreenHeader>
        <Poster poster={previewPoster} isCardScreen />
        <WrappedCardTabs {...selectedCard} />
      </CardScreenTop>

      <CardScreenBottom>
        <WrappedPreviewCardsList selectedCardId={selectedCardId} />
        <Footer isCardScreen />
      </CardScreenBottom>
    </Fragment>
  );
};

CardScreen.propTypes = {
  selectedCardId: PropTypes.string.isRequired,
  cardsData: PropTypes.arrayOf(PropTypes.object.isRequired),
};

const mapStateToProps = ({cardsData}) => ({cardsData});

export default connect(mapStateToProps)(CardScreen);
