import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import PreviewCardsList from '../../components/preview-cards-list/preview-cards-list.jsx';
import {DEFAULT_GENRE} from '../../const.js';
import ActionCreator from '../../actions/action-creator.js';

const MAX_AMOUNT_SIMILAR_CARD = 4;

const withPreviewCardsListState = (Component) => {
  class WithPreviewCardsListState extends PureComponent {
    constructor(props) {
      super(props);
      this.state = {
        mouseEnterCard: null,
      };

      this._handlePreviewCardMouseEnter = this._handlePreviewCardMouseEnter.bind(this);
      this._handlePreviewCardMouseLeave = this._handlePreviewCardMouseLeave.bind(this);
    }

    _handlePreviewCardMouseEnter(evt) {
      const mouseEnterCard = this.props.cardsData.find(({id}) => id === +evt.currentTarget.id);
      this.setState({mouseEnterCard});
    }

    _handlePreviewCardMouseLeave() {
      this.setState({mouseEnterCard: null});
    }

    _filtersCardsByGenre(currentGenre, cards, selectedCardId) {
      if (selectedCardId) {
        return cards
          .filter(({id, genre}) => id !== selectedCardId && genre === currentGenre)
          .slice(0, MAX_AMOUNT_SIMILAR_CARD);
      }

      return cards.filter(({genre}) => genre === currentGenre);
    }

    _renderComponent() {
      const {genre, cardsData, selectedCardId, showingCardsAmount, changeFilteredCardsLength, onActiveItemClick} = this.props;
      const cards = genre !== DEFAULT_GENRE ? this._filtersCardsByGenre(genre, cardsData, selectedCardId) : cardsData;
      changeFilteredCardsLength(cards.length);

      return (
        <Component
          cardsData={cards.slice(0, showingCardsAmount)}
          mouseEnterCard={this.state.mouseEnterCard}
          previewCardHandlers={[onActiveItemClick, this._handlePreviewCardMouseEnter, this._handlePreviewCardMouseLeave]}
        />
      );
    }

    render() {
      return this._renderComponent();
    }
  }

  WithPreviewCardsListState.propTypes = {
    cardsData: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
    genre: PropTypes.string.isRequired,
    selectedCardId: PropTypes.number,
    showingCardsAmount: PropTypes.number,
    changeFilteredCardsLength: PropTypes.func.isRequired,
    onActiveItemClick: PropTypes.func.isRequired,
  };

  return WithPreviewCardsListState;
};

const mapStateToProps = ({genre, showingCardsAmount}) => ({genre, showingCardsAmount});

const mapDispatchToProps = (dispatch) => ({
  changeFilteredCardsLength: (length) => {
    dispatch(ActionCreator.changeFilteredCardsLength(length));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(withPreviewCardsListState(PreviewCardsList));
