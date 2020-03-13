import React, {Fragment} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import CardScreenTop from '../card-screen-top/card-screen-top.jsx';
import CardScreenHeader from '../card-screen-header/card-screen-header.jsx';
import Header from '../header/header.jsx';
import HeaderCardDesc from '../header-card-desc/header-card-desc.jsx';
import HeaderButtons from '../header-buttons/header-buttons.jsx';
import Poster from '../poster/poster.jsx';
import CardTabs from '../card-tabs/card-tabs.jsx';
import CardScreenBottom from '../card-screen-bottom/card-screen-bottom.jsx';
import PreviewCardList from '../preview-card-list/preview-card-list.jsx';
import Footer from '../footer/footer.jsx';

import compose from '../../hocs/compose/compose.js';
import withCardTabsState from '../../hocs/with-card-tabs-state/with-card-tabs-state.jsx';
import withPreviewCardListState from '../../hocs/with-preview-card-list-state/with-preview-card-list-state.jsx';
import withActiveItem from '../../hocs/with-active-item/with-active-item.jsx';

import {ComponentTypes} from '../../const.js';


const WrappedCardTabs = withCardTabsState(CardTabs);
const WrappedPreviewCardList = compose(withActiveItem(ComponentTypes.PREVIEW_CARDS_LIST), withPreviewCardListState)(PreviewCardList);

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
        <WrappedPreviewCardList selectedCardId={selectedCardId} />
        <Footer isCardScreen />
      </CardScreenBottom>
    </Fragment>
  );
};

CardScreen.propTypes = {
  selectedCardId: PropTypes.string.isRequired,
  cardsData: PropTypes.arrayOf(PropTypes.object.isRequired),
};

const mapStateToProps = ({cardList: {cardsData}}) => ({cardsData});

export default connect(mapStateToProps)(CardScreen);
