import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import Spinner from '../../components/spinner/spinner.jsx';
import ErrorIndicator from '../../components/error-indicator/error-indicator.jsx';

import compose from '../compose/compose.js';
import withCardsService from '../../hocs/with-cards-service/with-cards-service.jsx';

import FetchActions from '../../actions/fetch-actions.js';
import {DataTypes} from '../../const.js';


const withData = (dataType) => (Component) => {
  class WithData extends PureComponent {
    componentDidMount() {
      this.props.fetchData(dataType);
    }

    render() {
      const {promoCardData, cardsData, loading, errorPromo, errorCards} = this.props;

      if (loading) {
        return <Spinner />;
      }

      switch (dataType) {
        case DataTypes.PROMO_DATA:
          if (errorPromo) {
            return <ErrorIndicator message={errorPromo.message} />;
          }

          return (
            <Component {...promoCardData}/>
          );

        case DataTypes.CARDS_DATA:
          if (errorCards) {
            return <ErrorIndicator message={errorCards.message} />;
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
    cardsData: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
    loading: PropTypes.bool.isRequired,
    errorPromo: PropTypes.object,
    errorCards: PropTypes.object,
  };

  const mapStateToProps = ({promoCardData, cardsData, loading, errorPromo, errorCards}) => ({promoCardData, cardsData, loading, errorPromo, errorCards});

  const mapDispatchToProps = (dispatch, ownProps) => {
    const {cardsService} = ownProps;

    return {
      fetchData: FetchActions.fetchData(cardsService, dispatch),
    };
  };

  return compose(withCardsService, connect(mapStateToProps, mapDispatchToProps))(WithData);
};

export default withData;
