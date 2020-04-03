import * as React from 'react';

import {connect} from 'react-redux';
import {getShowingCardsAmount, getFilteredCards} from '../../reducers/card-list-state/selectors';
import {getScreen} from '../../reducers/app-state/selectors';
import {Card, HandleWithEvt, Screens, ShowingCardsAmount} from '../../types';
import ActionCreator from '../../actions/action-creator';


const MAX_AMOUNT_SIMILAR_CARD = 4;

type Props = {
  filteredCards: Array<Card>;
  screen: Screens;
  showingCardsAmount: ShowingCardsAmount;
  userCards: Array<Card> | [];
  onActiveItemClick: HandleWithEvt;
  setMouseEnterCardId: (id: number) => void;
}

type State = {
  mouseEnterCard: Card | null;
}

const withPreviewCardListState = (Component) => {

  class WithPreviewCardListState extends React.PureComponent<Props, State> {

    constructor(props) {
      super(props);

      this.handlePreviewCardMouseEnter = this.handlePreviewCardMouseEnter.bind(this);
      this.handlePreviewCardMouseLeave = this.handlePreviewCardMouseLeave.bind(this);
    }

    private handlePreviewCardMouseEnter(evt) {
      const {setMouseEnterCardId} = this.props;
      const {currentTarget: {id}} = evt;

      setMouseEnterCardId(+id);
    }

    private handlePreviewCardMouseLeave() {
      const {setMouseEnterCardId} = this.props;

      setMouseEnterCardId(-1);
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

  const mapDispatchToProps = (dispatch) => ({
    setMouseEnterCardId: (id) => dispatch(ActionCreator.changeMouseEnterCardId(id)),
  });

  return connect(mapStateToProps, mapDispatchToProps)(WithPreviewCardListState);
};

export default withPreviewCardListState;
