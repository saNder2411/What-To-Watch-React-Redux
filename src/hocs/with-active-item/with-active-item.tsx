import * as React from 'react';
import {withRouter} from 'react-router-dom';

import {connect} from 'react-redux';
import compose from '../compose/compose';
import CardListActions from '../../actions/card-list-actions/card-list-actions';

import {ShowingCardsAmount, Card} from '../../types';
import {getAppRoute} from '../../utils/utils';


type Props = {
  history: {
    push: (arg: string) => void;
  };
  userCards: Array<Card> | void;
  filtersCards: (genre: string, showingCardsAmount: ShowingCardsAmount) => void;
}

const withActiveItem = (Component) => {

  class WithActiveItem extends React.PureComponent<Props> {

    constructor(props: Props) {
      super(props);
      this.handleActiveItemClick = this.handleActiveItemClick.bind(this);
    }

    private handleActiveItemClick(evt) {
      evt.preventDefault();
      const {currentTarget: {id}} = evt;
      const {history, filtersCards} = this.props;

      if (id) {
        history.push(getAppRoute(id).CARDS);

        return;
      }

      const {target: {textContent: genre}} = evt;

      filtersCards(genre, ShowingCardsAmount.ON_START);
    }

    render() {
      const {userCards} = this.props;

      return <Component userCards={userCards ? userCards : []} onActiveItemClick={this.handleActiveItemClick} />;
    }
  }


  const mapDispatchToProps = (dispatch) => ({
    filtersCards: (genre, showingCardsAmount) => CardListActions.filtersCards(dispatch)(genre, showingCardsAmount),
  });

  return compose(withRouter, connect(void 0, mapDispatchToProps))(WithActiveItem);
};

export default withActiveItem;
