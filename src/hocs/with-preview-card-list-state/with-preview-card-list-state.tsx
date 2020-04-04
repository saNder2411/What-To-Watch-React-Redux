import * as React from 'react';
import {connect} from 'react-redux';
import {getShowingCardsAmount, getFilteredCards} from '../../reducers/card-list-state/selectors';
import {getScreen} from '../../reducers/app-state/selectors';
import {Card, HandleWithEvt, Screens, ShowingCardsAmount} from '../../types';


const MAX_AMOUNT_SIMILAR_CARD = 4;

type Props = {
  filteredCards: Array<Card>;
  screen: Screens;
  showingCardsAmount: ShowingCardsAmount;
  userCards: Array<Card> | [];
  onActiveItemClick: HandleWithEvt;
}

const withPreviewCardListState = (Component) => {

  class WithPreviewCardListState extends React.PureComponent<Props> {

    private getPreviewCardList() {
      const {filteredCards, screen, showingCardsAmount, userCards} = this.props;
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

      return cards;
    }

    render() {
      const {onActiveItemClick} = this.props;

      return <Component cards={this.getPreviewCardList()} previewCardHandlers={[onActiveItemClick]} />;
    }
  }

  const mapStateToProps = (state) => ({
    filteredCards: getFilteredCards(state),
    screen: getScreen(state),
    showingCardsAmount: getShowingCardsAmount(state),
  });

  return connect(mapStateToProps)(WithPreviewCardListState);
};

export default withPreviewCardListState;
