import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import Spinner from '../../components/spinner/spinner.jsx';
import ErrorIndicator from '../../components/error-indicator/error-indicator.jsx';

import compose from '../compose/compose.js';
import withCardsService from '../../hocs/with-cards-service/with-cards-service.jsx';
import {getPromoCardData, getPromoLoading, getPromoError} from '../../reducers/promo-card/selectors.js';
import {getCardsData, getCardsLoading, getCardsError} from '../../reducers/card-list/selectors.js';

import FetchActions from '../../actions/fetch-actions/fetch-actions.js';
import {DataTypes} from '../../const.js';


const withData = (dataType) => (Component) => {
  class WithData extends PureComponent {
    componentDidMount() {
      this.props.fetchData(dataType);
    }

    render() {
      const {promoCardData, promoLoading, promoError, cardsData, cardsLoading, cardsError} = this.props;

      if (promoLoading || cardsLoading) {
        return <Spinner />;
      }

      switch (dataType) {
        case DataTypes.PROMO_DATA:
          if (promoError) {
            return <ErrorIndicator message={promoError.message} />;
          }

          return (
            <Component {...promoCardData}/>
          );

        case DataTypes.CARDS_DATA:
          if (cardsError) {
            return <ErrorIndicator message={cardsError.message} />;
          }

          return (
            <Component cardsData={cardsData} />
          );
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
  };

  const mapStateToProps = (state) => ({
    promoCardData: getPromoCardData(state),
    promoLoading: getPromoLoading(state),
    promoError: getPromoError(state),
    cardsData: getCardsData(state),
    cardsLoading: getCardsLoading(state),
    cardsError: getCardsError(state),
  });

  const mapDispatchToProps = (dispatch, ownProps) => {
    const {cardsService} = ownProps;

    return {
      fetchData: (datType) => dispatch(FetchActions.fetchData(cardsService)(datType)),
    };
  };

  return compose(withCardsService, connect(mapStateToProps, mapDispatchToProps))(WithData);
};

export default withData;
