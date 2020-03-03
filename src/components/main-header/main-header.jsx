import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import withCardsService from '../../hocs/with-cards-service/with-cards-service.jsx';
import ActionCreator from '../../actions/action-creator.js';
import Header from '../header/header.jsx';
import HeaderCardDesc from '../header-card-desc/header-card-desc.jsx';
import Poster from '../poster/poster.jsx';

class MainHeader extends PureComponent {
  componentDidMount() {
    const {cardsService, promoCardLoaded} = this.props;
    const promoCardData = cardsService.getPromoCardData();
    promoCardLoaded(promoCardData);
  }

  render() {
    const {promoCardData: {title, genre, date, poster}} = this.props;
    return (
      <section className="movie-card">
        <Header />
        <div className="movie-card__wrap">
          <div className="movie-card__info">
            <Poster poster={poster}/>
            <HeaderCardDesc title={title} genre={genre} date={date} />
          </div>
        </div>
      </section>
    );
  }
}

MainHeader.propTypes = {
  promoCardData: PropTypes.shape({
    title: PropTypes.string,
    genre: PropTypes.string,
    date: PropTypes.number,
    poster: PropTypes.string,
  }),
  cardsService: PropTypes.object.isRequired,
  promoCardLoaded: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({promoCardData: state.promoCardData});

const mapDispatchToProps = (dispatch) => ({
  promoCardLoaded: (newPromoCard) => {
    dispatch(ActionCreator.promoCardLoaded(newPromoCard));
  },
});

export default withCardsService(connect(mapStateToProps, mapDispatchToProps)(MainHeader));
