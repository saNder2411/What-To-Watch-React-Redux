import React, {PureComponent, Fragment} from 'react';
import PropTypes from 'prop-types';
import GenresList from '../../components/genres-list/genres-list.jsx';
import {DEFAULT_GENRE} from '../../const.js';

const withGenresList = (GenresListComponent) => (CardsListComponent) => {
  class WithGenresList extends PureComponent {
    constructor(props) {
      super(props);
      this.state = {
        activeGenre: DEFAULT_GENRE,
      };
    }

    _createLabels({cardsData}) {
      const genres = cardsData.slice().map((card) => card.detailsData.genre).sort();

      return [`All genres`, ...Array.from(new Set(genres))];
    }

    render() {
      const labels = this._createLabels(this.props);

      return (
        <Fragment>
          <GenresListComponent labels={labels} activeGenre={this.state.activeGenre}/>
          <CardsListComponent {...this.props}/>
        </Fragment>
      );
    }
  }

  WithGenresList.propTypes = {
    cardsData: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
  };

  return WithGenresList;

};

export default withGenresList(GenresList);
