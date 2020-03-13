import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import PropTypes from 'prop-types';

import compose from '../compose/compose.js';
import FilterActions from '../../actions/filter-actions.js';
import {DEFAULT_GENRE, ComponentTypes, ShowingCardsAmount} from '../../const.js';


const withActiveItem = (componentType) => (Component) => {
  class WithActiveItem extends PureComponent {
    constructor(props) {
      super(props);
      this._handleActiveItemClick = this._handleActiveItemClick.bind(this);
    }

    _handleActiveItemClick(evt) {
      evt.preventDefault();
      const {currentTarget: {id}} = evt;
      const {cardsData, history, filtersCards} = this.props;

      if (id) {
        const {genre} = cardsData.find((card) => card.id === +id);
        const filteredCards = cardsData.filter((card) => card.id !== +id && card.genre === genre);

        filtersCards(genre, filteredCards, ShowingCardsAmount.ON_START);
        history.push(`/cards${id}`);

        return;
      }

      const {target: {textContent: genre}} = evt;
      const filteredCards = genre === DEFAULT_GENRE ? cardsData : cardsData.filter((card) => card.genre === genre);

      filtersCards(genre, filteredCards, ShowingCardsAmount.ON_START);
    }

    render() {
      const {cardsData, selectedCardId, filteredCards} = this.props;

      switch (componentType) {
        case ComponentTypes.PREVIEW_CARDS_LIST:
          return (
            <Component
              filteredCards={filteredCards}
              selectedCardId={selectedCardId}
              onActiveItemClick={this._handleActiveItemClick}
            />
          );
        case ComponentTypes.GENRES_LIST:
          return (
            <Component
              cardsData={cardsData}
              onActiveItemClick={this._handleActiveItemClick}
            />
          );
      }

      return <Component />;
    }
  }

  WithActiveItem.propTypes = {
    filtersCards: PropTypes.func.isRequired,
    history: PropTypes.object.isRequired,
    cardsData: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
    filteredCards: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
    selectedCardId: PropTypes.string,
  };

  const mapStateToProps = ({cardsData, filteredCards}) => ({cardsData, filteredCards});
  const mapDispatchToProps = (dispatch) => ({filtersCards: FilterActions.filtersCards(dispatch)});

  return compose(withRouter, connect(mapStateToProps, mapDispatchToProps))(WithActiveItem);
};

export default withActiveItem;
