import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

import {connect} from 'react-redux';
import {getShowingCardsAmount} from '../../reducers/filtered-card-list/selectors.js';


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
      const {filteredCards, selectedCardId, showingCardsAmount, onActiveItemClick} = this.props;

      return (
        <Component
          filteredCards={filteredCards.slice(0, selectedCardId ? MAX_AMOUNT_SIMILAR_CARD : showingCardsAmount)}
          mouseEnterCard={this.state.mouseEnterCard}
          previewCardHandlers={[onActiveItemClick, this._handlePreviewCardMouseEnter, this._handlePreviewCardMouseLeave]}
        />
      );
    }
  }

  WithPreviewCardListState.propTypes = {
    filteredCards: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
    selectedCardId: PropTypes.string,
    showingCardsAmount: PropTypes.number.isRequired,
    onActiveItemClick: PropTypes.func.isRequired,
  };

  const mapStateToProps = (state) => ({showingCardsAmount: getShowingCardsAmount(state)});

  return connect(mapStateToProps)(WithPreviewCardListState);
};

export default withPreviewCardListState;
