import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

import {connect} from 'react-redux';
import {getShowingCardsAmount, getFilteredCards, getFavoriteCards} from '../../reducers/filtered-card-list/selectors.js';
import {Screens} from '../../const.js';


const MAX_AMOUNT_SIMILAR_CARD = 4;

const withPreviewCardListState = (Component) => {

  class WithPreviewCardListState extends PureComponent {

    constructor(props) {
      super(props);
      this.state = {
        mouseEnterCard: null,
      };

      this._handlePreviewCardMouseEnter = this._handlePreviewCardMouseEnter.bind(this);
      this._handlePreviewCardMouseLeave = this._handlePreviewCardMouseLeave.bind(this);
    }

    _handlePreviewCardMouseEnter(evt) {
      const mouseEnterCard = this.props.filteredCards.find(({id}) => id === +evt.currentTarget.id);
      this.setState({mouseEnterCard});
    }

    _handlePreviewCardMouseLeave() {
      this.setState({mouseEnterCard: null});
    }

    render() {
      const {filteredCards, favoriteCards, screen, showingCardsAmount, onActiveItemClick} = this.props;
      let cards = [];

      switch (screen) {
        case Screens.MAIN:
          cards = [...filteredCards.slice(0, showingCardsAmount)];
          break;
        case Screens.CARD:
          cards = [...filteredCards.slice(0, MAX_AMOUNT_SIMILAR_CARD)];
          break;
        case Screens.USER_LIST:
          cards = [...favoriteCards];
          break;
      }

      return (
        <Component
          cards={cards}
          mouseEnterCard={this.state.mouseEnterCard}
          previewCardHandlers={[onActiveItemClick, this._handlePreviewCardMouseEnter, this._handlePreviewCardMouseLeave]}
        />
      );
    }
  }

  WithPreviewCardListState.propTypes = {
    filteredCards: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
    favoriteCards: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
    screen: PropTypes.string.isRequired,
    showingCardsAmount: PropTypes.number.isRequired,
    onActiveItemClick: PropTypes.func.isRequired,
  };

  const mapStateToProps = (state) => ({
    showingCardsAmount: getShowingCardsAmount(state),
    filteredCards: getFilteredCards(state),
    favoriteCards: getFavoriteCards(state),
  });

  return connect(mapStateToProps)(WithPreviewCardListState);
};

export default withPreviewCardListState;
