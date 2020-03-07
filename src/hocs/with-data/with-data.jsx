import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import withCardsService from '../../hocs/with-cards-service/with-cards-service.jsx';
import ActionCreator from '../../actions/action-creator.js';
import {DataTypes} from '../../const.js';

const withData = (Component, dataType) => {
  class WithData extends PureComponent {
    componentDidMount() {
      const {cardsService, promoCardLoaded, cardsLoaded} = this.props;

      switch (dataType) {
        case DataTypes.PROMO_DATA:
          const promoCardData = cardsService.getPromoCardData();

          promoCardLoaded(promoCardData);
          break;

        case DataTypes.CARDS_DATA:
          const cardsData = cardsService.getCards();

          cardsLoaded(cardsData);
          break;
      }
    }

    render() {
      const {promoCardData, cardsData} = this.props;

      switch (dataType) {
        case DataTypes.PROMO_DATA:
          return (
            <Component {...promoCardData}/>
          );

        case DataTypes.CARDS_DATA:
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
    cardsService: PropTypes.object.isRequired,
    promoCardLoaded: PropTypes.func.isRequired,
    cardsLoaded: PropTypes.func.isRequired,
    promoCardData: PropTypes.object.isRequired,
    cardsData: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
  };

  const mapStateToProps = ({promoCardData, cardsData}) => ({promoCardData, cardsData});

  const mapDispatchToProps = (dispatch) => ({
    promoCardLoaded: (newPromoCard) => {
      dispatch(ActionCreator.promoCardLoaded(newPromoCard));
    },

    cardsLoaded: (newCards) => {
      dispatch(ActionCreator.cardsLoaded(newCards));
    },
  });

  return withCardsService(connect(mapStateToProps, mapDispatchToProps)(WithData));
};

export default withData;
