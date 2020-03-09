import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import CardTabs from '../card-tabs/card-tabs.jsx';
import withCardTabsState from '../../hocs/with-card-tabs-state/with-card-tabs-state.jsx';
import WithPreviewCardsListState from '../../hocs/with-preview-cards-list-state/with-preview-cards-list-state.jsx';
import withActiveItem from '../../hocs/with-active-item/with-active-item.jsx';
import CardScreenHeader from '../card-screen-header/card-screen-header.jsx';
import Poster from '../poster/poster.jsx';
import Footer from '../footer/footer.jsx';

const WrappedCardTabs = withCardTabsState(CardTabs);
const WrappedPreviewCardsList = withActiveItem(WithPreviewCardsListState);

const CardScreen = ({selectedCardId, cardsData}) => {
  const selectedCard = cardsData.find(({id}) => +selectedCardId === id);
  const {title, previewPoster, genre, release} = selectedCard;

  return (
    <Fragment>
      <section className="movie-card movie-card--full">
        <CardScreenHeader title={title} genre={genre} release={release} selectedCardId={selectedCardId}/>

        <div className="movie-card__wrap movie-card__translate-top">
          <div className="movie-card__info">

            <Poster poster={previewPoster} isCardScreen />
            <WrappedCardTabs {...selectedCard} />

          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog catalog--like-this">
          <h2 className="catalog__title">More like this</h2>

          <WrappedPreviewCardsList selectedCardId={selectedCardId}/>

        </section>

        <Footer isCardScreen />
      </div>
    </Fragment>
  );
};

CardScreen.propTypes = {
  selectedCardId: PropTypes.string.isRequired,
  cardsData: PropTypes.arrayOf(PropTypes.object.isRequired),
};

const mapStateToProps = ({cardsData}) => ({cardsData});

export default connect(mapStateToProps)(CardScreen);
