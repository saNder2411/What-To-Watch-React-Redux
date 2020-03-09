import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import ActionCreator from '../../actions/action-creator.js';
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
      const {cardsData, history, changeGenre, changeShowingCardsAmount} = this.props;

      changeShowingCardsAmount(ShowingCardsAmount.ON_START);

      if (id) {
        const {genre} = cardsData.find((card) => card.id === +id);

        changeGenre(genre);
        history.push(`/cards${id}`);
        return;
      }

      const {target: {textContent}} = evt;
      changeGenre(textContent);
    }

    render() {
      const {cardsData, selectedCardId} = this.props;
      return (
        <Component
          cardsData={cardsData}
          selectedCardId={selectedCardId ? selectedCardId : null}
          onActiveItemClick={this._handleActiveItemClick}/>
      );
    }
  }

  WithActiveItem.propTypes = {
    changeGenre: PropTypes.func.isRequired,
    changeShowingCardsAmount: PropTypes.func.isRequired,
    history: PropTypes.object.isRequired,
    cardsData: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
    selectedCardId: PropTypes.string,
  };

  const mapStateToProps = ({cardsData}) => ({cardsData});

  const mapDispatchToProps = (dispatch) => ({
    changeGenre: (genre) => {
      dispatch(ActionCreator.changeGenre(genre));
    },

    changeShowingCardsAmount: (amount) => {
      dispatch(ActionCreator.changeShowingCardsAmount(amount));
    },
  });

  return connect(mapStateToProps, mapDispatchToProps)(withRouter(WithActiveItem));
};

export default withActiveItem;
