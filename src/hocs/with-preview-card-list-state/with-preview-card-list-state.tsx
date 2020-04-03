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

type State = {
  mouseEnterCard: Card | null;
}

const withPreviewCardListState = (Component) => {

  class WithPreviewCardListState extends React.PureComponent<Props, State> {

    constructor(props) {
      super(props);
      this.state = {
        mouseEnterCard: null,
      };

      this.handlePreviewCardMouseEnter = this.handlePreviewCardMouseEnter.bind(this);
      this.handlePreviewCardMouseLeave = this.handlePreviewCardMouseLeave.bind(this);
    }

    private handlePreviewCardMouseEnter(evt) {
      const {filteredCards, userCards, screen} = this.props;
      const cards = screen === Screens.MAIN || screen === Screens.CARD ? filteredCards : userCards;

      const mouseEnterCard = cards.find(({id}) => id === +evt.currentTarget.id);

      this.setState({mouseEnterCard});
    }

    private handlePreviewCardMouseLeave() {
      this.setState({mouseEnterCard: null});
    }

    render() {
      const {filteredCards, screen, showingCardsAmount, userCards, onActiveItemClick} = this.props;
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
          previewCardHandlers={[onActiveItemClick, this.handlePreviewCardMouseEnter, this.handlePreviewCardMouseLeave]}
        />
      );
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
