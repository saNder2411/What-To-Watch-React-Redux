import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

import {withRouter} from 'react-router-dom';

import {connect} from 'react-redux';
import compose from '../compose/compose.js';
import {getCardsData} from '../../reducers/card-list/selectors.js';
import FilterActions from '../../actions/filter-actions/filter-actions.js';

import {ShowingCardsAmount} from '../../const.js';


const withActiveItem = (Component) => {

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

        filtersCards(genre, ShowingCardsAmount.ON_START, +id);
        history.push(`/cards/${id}`);

        return;
      }

      const {target: {textContent: genre}} = evt;

      filtersCards(genre, ShowingCardsAmount.ON_START);
    }

    render() {

      return <Component onActiveItemClick={this._handleActiveItemClick} />;
    }
  }

  WithActiveItem.propTypes = {
    filtersCards: PropTypes.func.isRequired,
    history: PropTypes.object.isRequired,
    cardsData: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
  };

  const mapStateToProps = (state) => ({
    cardsData: getCardsData(state),
  });

  const mapDispatchToProps = (dispatch) => ({filtersCards: FilterActions.filtersCards(dispatch)});

  return compose(withRouter, connect(mapStateToProps, mapDispatchToProps))(WithActiveItem);
};

export default withActiveItem;
