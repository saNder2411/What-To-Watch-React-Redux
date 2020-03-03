import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {withRouter} from 'react-router-dom';
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

      this._handlePreviewCardClick = this._handlePreviewCardClick.bind(this);
      this._handlePreviewCardMouseEnter = this._handlePreviewCardMouseEnter.bind(this);
      this._handlePreviewCardMouseLeave = this._handlePreviewCardMouseLeave.bind(this);
    }

    _handlePreviewCardClick(evt) {
      evt.preventDefault();
      const {currentTarget: {id}} = evt;
      const {history, changeGenre, cardsData} = this.props;
      const {detailsData: {genre}} = cardsData.find((card) => card.id === +id);

      changeGenre(genre);
      history.push(`/cards${id}`);
    }

    _handlePreviewCardMouseEnter(evt) {
      const mouseEnterCard = this.props.cardsData.find((card) => card.id === +evt.currentTarget.id);

      this.setState({mouseEnterCard});
    }

    _handlePreviewCardMouseLeave() {
      this.setState({mouseEnterCard: null});
    }

    _filtersCardsByGenre(genre, cards, selectedCardId) {
      if (selectedCardId) {
        return cards
        .filter(({id, detailsData}) => id !== selectedCardId && detailsData.genre === genre)
        .slice(0, MAX_AMOUNT_SIMILAR_CARD);
      }


      return cards.filter(({detailsData}) => detailsData.genre === genre);
    }

    _renderComponent() {
      const {genre, cardsData, selectedCardId} = this.props;
      const cards = genre !== DEFAULT_GENRE ? this._filtersCardsByGenre(genre, cardsData, selectedCardId) : cardsData;

      return (
        <Component
          cardsData={cards}
          mouseEnterCard={this.state.mouseEnterCard}
          previewCardHandlers={[this._handlePreviewCardClick, this._handlePreviewCardMouseEnter, this._handlePreviewCardMouseLeave]}
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
    history: PropTypes.object.isRequired,
    changeGenre: PropTypes.func.isRequired,
    selectedCardId: PropTypes.number,
  };

  return WithPreviewCardsListState;
};

const mapStateToProps = (state) => ({cardsData: state.cardsData, genre: state.genre});

const mapDispatchToProps = (dispatch) => ({
  changeGenre: (genre) => {
    dispatch(ActionCreator.changeGenre(genre));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(withPreviewCardsListState(PreviewCardsList)));
