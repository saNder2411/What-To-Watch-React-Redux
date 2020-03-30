import * as React from 'react';


import {withRouter} from 'react-router-dom';

import {connect} from 'react-redux';
import compose from '../compose/compose';
import CardListActions from '../../actions/card-list-actions/card-list-actions';

import {ShowingCardsAmount} from '../../const';
import {getAppRoute} from '../../utils/utils';


const withActiveItem = (Component) => {

  class WithActiveItem extends React.PureComponent {

    constructor(props) {
      super(props);
      this._handleActiveItemClick = this._handleActiveItemClick.bind(this);
    }

    _handleActiveItemClick(evt) {
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

      return <Component userCards={userCards} onActiveItemClick={this._handleActiveItemClick} />;
    }
  }


  const mapDispatchToProps = (dispatch) => ({filtersCards: CardListActions.filtersCards(dispatch)});

  return compose(withRouter, connect(void 0, mapDispatchToProps))(WithActiveItem);
};

export default withActiveItem;
