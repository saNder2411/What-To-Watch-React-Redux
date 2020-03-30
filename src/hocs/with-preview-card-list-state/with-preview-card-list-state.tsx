import * as React from 'react';


import {connect} from 'react-redux';
import {getShowingCardsAmount, getFilteredCards} from '../../reducers/card-list-state/selectors';
import {getScreen} from '../../reducers/app-state/selectors';
import {Screens} from '../../const';


const MAX_AMOUNT_SIMILAR_CARD = 4;

const withPreviewCardListState = (Component) => {

  class WithPreviewCardListState extends React.PureComponent {

    constructor(props) {
      super(props);
      this.state = {
        mouseEnterCard: null,
      };

      this._handlePreviewCardMouseEnter = this._handlePreviewCardMouseEnter.bind(this);
      this._handlePreviewCardMouseLeave = this._handlePreviewCardMouseLeave.bind(this);
    }

    _handlePreviewCardMouseEnter(evt) {
      const {filteredCards, userCards, screen} = this.props;
      const cards = screen === Screens.MAIN || screen === Screens.CARD ? filteredCards : userCards;

      const mouseEnterCard = cards.find(({id}) => id === +evt.currentTarget.id);

      this.setState({mouseEnterCard});
    }

    _handlePreviewCardMouseLeave() {
      this.setState({mouseEnterCard: null});
    }

    render() {
      const {filteredCards, userCards, screen, showingCardsAmount, onActiveItemClick} = this.props;
      let cards = [];

      switch (screen) {
        case Screens.MAIN:
          cards = [...filteredCards.slice(0, showingCardsAmount)];
          break;
        case Screens.CARD:
          cards = [...filteredCards.slice(0, MAX_AMOUNT_SIMILAR_CARD)];
          break;
        case Screens.USER_LIST:
          cards = [...userCards];
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

  const mapStateToProps = (state) => ({
    showingCardsAmount: getShowingCardsAmount(state),
    filteredCards: getFilteredCards(state),
    screen: getScreen(state),
  });

  return connect(mapStateToProps)(WithPreviewCardListState);
};

export default withPreviewCardListState;
