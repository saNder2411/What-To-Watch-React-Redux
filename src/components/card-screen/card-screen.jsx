import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import CardTabs from '../card-tabs/card-tabs.jsx';
import WithPreviewCardsListState from '../../hocs/with-preview-cards-list-state/with-preview-cards-list-state.jsx';
import CardScreenHeader from '../card-screen-header/card-screen-header.jsx';
import Poster from '../poster/poster.jsx';
import Footer from '../footer/footer.jsx';

const CardScreen = ({selectedCardId, cardsData}) => {
  const selectedCard = cardsData.find(({id}) => selectedCardId === id);
  const {overviewData: {title, previewPoster}, detailsData: {genre, release}} = selectedCard;

  return (
    <Fragment>
      <section className="movie-card movie-card--full">
        <CardScreenHeader title={title} genre={genre} release={release}/>

        <div className="movie-card__wrap movie-card__translate-top">
          <div className="movie-card__info">

            <Poster poster={previewPoster} isCardScreen />
            <CardTabs data={selectedCard} />

          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog catalog--like-this">
          <h2 className="catalog__title">More like this</h2>

          <WithPreviewCardsListState selectedCardId={selectedCardId}/>

        </section>

        <Footer isCardScreen />
      </div>
    </Fragment>
  );
};

CardScreen.propTypes = {
  selectedCardId: PropTypes.number.isRequired,
  cardsData: PropTypes.arrayOf(PropTypes.object.isRequired),
};

const mapStateToProps = (state) => ({cardsData: state.cardsData});

export default connect(mapStateToProps)(CardScreen);
