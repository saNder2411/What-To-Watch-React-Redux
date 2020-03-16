import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

import CardOverview from '../../components/card-overview/card-overview.jsx';
import CardDetails from '../../components/card-details/card-details.jsx';
import CardReviews from '../../components/card-reviews/card-reviews.jsx';

import {CardMode} from '../../const.js';


const withCardTabsState = (Component) => {
  class WithCardTabsState extends PureComponent {
    constructor(props) {
      super(props);
      this.state = {
        cardMode: `overview`,
      };

      this._handleTabsNavClick = this._handleTabsNavClick.bind(this);
    }

    _handleTabsNavClick(evt, mode) {
      evt.preventDefault();

      this.setState({cardMode: mode});
    }

    _renderTab(cardMode) {
      const {director, starring, runtime, genre, released, description, rating, scoresCount} = this.props;

      switch (cardMode) {
        case CardMode.DETAILS:
          return <CardDetails director={director} starring={starring} runtime={runtime} genre={genre} released={released} />;
        case CardMode.REVIEWS:
          return <CardReviews />;
      }

      return <CardOverview director={director} starring={starring} description={description} rating={rating} scoresCount={scoresCount}/>;
    }

    render() {
      const {cardMode} = this.state;

      return (
        <Component mode={cardMode} onTabsNavClick={this._handleTabsNavClick}>
          {this._renderTab(cardMode)}
        </Component>
      );
    }
  }

  WithCardTabsState.propTypes = {
    director: PropTypes.string.isRequired,
    starring: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
    runtime: PropTypes.number.isRequired,
    genre: PropTypes.string.isRequired,
    released: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    scoresCount: PropTypes.number.isRequired,
  };

  return WithCardTabsState;
};

export default withCardTabsState;

