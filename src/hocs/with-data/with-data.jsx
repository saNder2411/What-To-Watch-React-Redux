import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import Spinner from '../../components/spinner/spinner.jsx';
import ErrorIndicator from '../../components/error-indicator/error-indicator.jsx';

import compose from '../compose/compose.js';
import withCardsService from '../../hocs/with-cards-service/with-cards-service.jsx';
import {getPromoCardData, getPromoLoading, getPromoError} from '../../reducers/promo-card/selectors.js';
import {getCardsData, getCardsLoading, getCardsError} from '../../reducers/card-list/selectors.js';
import {getReviewsData, getReviewsLoading, getReviewsError} from '../../reducers/reviews/selectors.js';

import FetchActions from '../../actions/fetch-actions/fetch-actions.js';
import {DataTypes} from '../../const.js';


const withData = (dataType) => (Component) => {
  class WithData extends PureComponent {
    componentDidMount() {
      this.props.fetchData(dataType);
    }

    render() {
      const {
        promoCardData, promoLoading, promoError,
        cardsData, cardsLoading, cardsError,
        reviewsData, reviewsLoading, reviewsError} = this.props;
      let content;

      switch (dataType) {
        case DataTypes.PROMO_DATA:
          content = promoLoading ? <div className="movie-card"><Spinner /></div> : <Component {...promoCardData}/>;

          return promoError ? <ErrorIndicator message={promoError.message} /> : content;

        case DataTypes.CARDS_DATA:
          content = cardsLoading ? <Spinner /> : <Component cardsData={cardsData} />;

          return cardsError ? <ErrorIndicator message={cardsError.message} /> : content;

        case DataTypes.REVIEWS_DATA:
          content = reviewsLoading ? <Spinner /> : <Component reviewsData={reviewsData} />;

          return reviewsError ? <ErrorIndicator message={reviewsError.message} /> : content;
      }

      return (
        <Component/>
      );
    }
  }

  WithData.propTypes = {
    fetchData: PropTypes.func.isRequired,
    promoCardData: PropTypes.object.isRequired,
    promoLoading: PropTypes.bool.isRequired,
    promoError: PropTypes.object,
    cardsData: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
    cardsLoading: PropTypes.bool.isRequired,
    cardsError: PropTypes.object,
    reviewsData: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
    reviewsLoading: PropTypes.bool.isRequired,
    reviewsError: PropTypes.object,
  };

  const mapStateToProps = (state) => ({
    promoCardData: getPromoCardData(state),
    promoLoading: getPromoLoading(state),
    promoError: getPromoError(state),
    cardsData: getCardsData(state),
    cardsLoading: getCardsLoading(state),
    cardsError: getCardsError(state),
    reviewsData: getReviewsData(state),
    reviewsLoading: getReviewsLoading(state),
    reviewsError: getReviewsError(state),
  });

  const mapDispatchToProps = (dispatch, ownProps) => {
    const {cardsService, selectedCardId} = ownProps;

    return {
      fetchData: (datType) => dispatch(FetchActions.fetchData(cardsService, selectedCardId)(datType)),
    };
  };

  return compose(withCardsService, connect(mapStateToProps, mapDispatchToProps))(WithData);
};

export default withData;
