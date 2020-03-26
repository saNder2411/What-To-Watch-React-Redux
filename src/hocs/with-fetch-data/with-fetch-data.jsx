import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

import Spinner from '../../components/spinner/spinner.jsx';
import ErrorIndicator from '../../components/error-indicator/error-indicator.jsx';

import {connect} from 'react-redux';
import compose from '../compose/compose.js';
import withCardsService from '../with-cards-service/with-cards-service.jsx';
import {getPromoLoading} from '../../reducers/promo-card/selectors.js';
import {getCardsLoading, getCardsError} from '../../reducers/card-list/selectors.js';
import {getReviewsData, getReviewsLoading, getReviewsError} from '../../reducers/reviews/selectors.js';
import {getUserCardsData, getUserCardsLoading, getUserCardsError} from '../../reducers/user/selectors.js';

import FetchActions from '../../actions/fetch-actions/fetch-actions.js';
import {DataTypes} from '../../const.js';


const withFetchData = (dataType) => (Component) => {

  class WithFetchData extends PureComponent {

    componentDidMount() {
      this.props.fetchData(dataType);
    }

    render() {
      const {promoLoading, cardsLoading, cardsError, reviewsData, reviewsLoading,
        reviewsError, userCardsData, userCardsLoading, userCardsError} = this.props;
      let content;

      switch (dataType) {

        case DataTypes.FETCH_CARDS_DATA:
          content = cardsLoading || promoLoading ? <Spinner /> : <Component />;

          return cardsError ? <ErrorIndicator error={cardsError} /> : content;

        case DataTypes.FETCH_REVIEWS_DATA:
          content = reviewsLoading ? <Spinner /> : <Component reviewsData={reviewsData} />;

          return reviewsError ? <ErrorIndicator error={reviewsError} /> : content;

        case DataTypes.FETCH_USER_CARDS_DATA:
          content = userCardsLoading ? <Spinner /> : <Component userCards={userCardsData} />;

          return userCardsError ? <ErrorIndicator error={userCardsError} /> : content;
      }

      return (
        <Component/>
      );
    }
  }

  WithFetchData.propTypes = {
    fetchData: PropTypes.func.isRequired,
    promoLoading: PropTypes.bool.isRequired,
    cardsLoading: PropTypes.bool.isRequired,
    cardsError: PropTypes.object,
    reviewsData: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
    reviewsLoading: PropTypes.bool.isRequired,
    reviewsError: PropTypes.object,
    userCardsData: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
    userCardsLoading: PropTypes.bool.isRequired,
    userCardsError: PropTypes.object,
  };

  const mapStateToProps = (state) => ({
    promoLoading: getPromoLoading(state),
    cardsLoading: getCardsLoading(state),
    cardsError: getCardsError(state),
    reviewsData: getReviewsData(state),
    reviewsLoading: getReviewsLoading(state),
    reviewsError: getReviewsError(state),
    userCardsData: getUserCardsData(state),
    userCardsLoading: getUserCardsLoading(state),
    userCardsError: getUserCardsError(state),
  });

  const mapDispatchToProps = (dispatch, ownProps) => {
    const {cardsService, selectedCardIdFromHistory} = ownProps;

    return {
      fetchData: (datType) => dispatch(FetchActions.fetchData(cardsService, selectedCardIdFromHistory)(datType)),
    };
  };

  return compose(withCardsService, connect(mapStateToProps, mapDispatchToProps))(WithFetchData);
};

export default withFetchData;
