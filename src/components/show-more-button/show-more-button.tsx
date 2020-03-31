import * as React from 'react';

import {connect} from 'react-redux';
import {getFilteredCards, getShowingCardsAmount} from '../../reducers/card-list-state/selectors';
import ActionCreator from '../../actions/action-creator';
import {Card, ShowingCardsAmount} from '../../types';


type Props = {
  filteredCards: Array<Card>;
  showingCardsAmount: ShowingCardsAmount;
  changeShowingCardsAmount: (amount: ShowingCardsAmount | void) => void;
}

const ShowMoreButton: React.FC<Props> = ({filteredCards, showingCardsAmount, changeShowingCardsAmount}: Props) => {

  const showMoreButton = filteredCards.length > showingCardsAmount ? (
    <div className="catalog__more">
      <button
        className="catalog__button"
        type="button"
        onClick={() => changeShowingCardsAmount()}
      >
        Show more
      </button>
    </div>
  ) : null;

  return showMoreButton;
};

const mapStateToProps = (state) => ({
  filteredCards: getFilteredCards(state),
  showingCardsAmount: getShowingCardsAmount(state),
});

const mapDispatchToProps = (dispatch) => ({
  changeShowingCardsAmount: (amount) => dispatch(ActionCreator.changeShowingCardsAmount(amount)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ShowMoreButton);
