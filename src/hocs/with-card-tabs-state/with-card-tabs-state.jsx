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
      const {director, actors, runtime, genre, release, descriptions, rating, amountVoice, reviewsId} = this.props;

      switch (cardMode) {
        case CardMode.DETAILS:
          return <CardDetails director={director} actors={actors} runtime={runtime} genre={genre} release={release} />;
        case CardMode.REVIEWS:
          return <CardReviews reviewsId={reviewsId} />;
      }

      return <CardOverview director={director} actors={actors} descriptions={descriptions} rating={rating} amountVoice={amountVoice}/>;
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
    actors: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
    runtime: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    release: PropTypes.number.isRequired,
    descriptions: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
    rating: PropTypes.string.isRequired,
    amountVoice: PropTypes.number.isRequired,
    reviewsId: PropTypes.arrayOf(PropTypes.number.isRequired).isRequired,
  };

  return WithCardTabsState;
};

export default withCardTabsState;

