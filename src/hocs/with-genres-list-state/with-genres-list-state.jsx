import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import ActionCreator from '../../actions/action-creator.js';
import GenresList from '../../components/genres-list/genres-list.jsx';
import {DEFAULT_GENRE} from '../../const.js';

const MAX_AMOUNT_GENRES_LABEL = 9;

const withGenresListState = (GenresListComponent) => {
  class WithGenresListState extends PureComponent {
    constructor(props) {
      super(props);

      this._handleGenresListItemClick = this._handleGenresListItemClick.bind(this);
    }

    _handleGenresListItemClick(evt) {
      evt.preventDefault();
      const {target: {textContent}} = evt;
      const {changeGenre} = this.props;

      changeGenre(textContent);
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
    cardsData: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
    genre: PropTypes.string,
    changeGenre: PropTypes.func.isRequired,
  };

  return WithGenresListState;
};

const mapStateToProps = (state) => ({cardsData: state.cardsData, genre: state.genre});

const mapDispatchToProps = (dispatch) => ({
  changeGenre: (genre) => {
    dispatch(ActionCreator.changeGenre(genre));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(withGenresListState(GenresList));
