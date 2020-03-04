import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import withCardsService from '../../hocs/with-cards-service/with-cards-service.jsx';
import ActionCreator from '../../actions/action-creator.js';
import GenresList from '../../components/genres-list/genres-list.jsx';
import {DEFAULT_GENRE, ShowingCardsAmount} from '../../const.js';

const MAX_AMOUNT_GENRES_LABEL = 9;

const withGenresListState = (GenresListComponent) => {
  class WithGenresListState extends PureComponent {
    constructor(props) {
      super(props);

      this._handleGenresListItemClick = this._handleGenresListItemClick.bind(this);
    }

    componentDidMount() {
      const {cardsService, cardsLoaded} = this.props;
      const cardsData = cardsService.getCards();
      cardsLoaded(cardsData);
    }

    _handleGenresListItemClick(evt) {
      evt.preventDefault();
      const {target: {textContent}} = evt;
      const {changeGenre, changeShowingCardsAmount} = this.props;

      changeGenre(textContent);
      changeShowingCardsAmount(ShowingCardsAmount.ON_START);
    }

    _createLabels(cardsData) {
      const genres = cardsData.slice().map((card) => card.detailsData.genre).sort();

      return [DEFAULT_GENRE, ...Array.from(new Set(genres)).slice(0, MAX_AMOUNT_GENRES_LABEL)];
    }

    render() {
      const {cardsData, genre} = this.props;
      const labels = this._createLabels(cardsData);

      return (
        <GenresListComponent
          labels={labels}
          selectedGenre={genre}
          onGenresListItemClick={this._handleGenresListItemClick}
        />
      );
    }
  }

  WithGenresListState.propTypes = {
    cardsService: PropTypes.object.isRequired,
    cardsLoaded: PropTypes.func.isRequired,
    cardsData: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
    genre: PropTypes.string,
    changeGenre: PropTypes.func.isRequired,
    changeShowingCardsAmount: PropTypes.func.isRequired,
  };

  return WithGenresListState;
};

const mapStateToProps = ({cardsData, genre}) => ({cardsData, genre});

const mapDispatchToProps = (dispatch) => ({
  cardsLoaded: (newCards) => {
    dispatch(ActionCreator.cardsLoaded(newCards));
  },

  changeGenre: (genre) => {
    dispatch(ActionCreator.changeGenre(genre));
  },

  changeShowingCardsAmount: (amount) => {
    dispatch(ActionCreator.changeShowingCardsAmount(amount));
  },
});

export default withCardsService(connect(mapStateToProps, mapDispatchToProps)(withGenresListState(GenresList)));
