import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

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
      const {children: [CardOverview, CardDetails, WrappedCardReviews]} = this.props;

      switch (cardMode) {
        case CardMode.DETAILS:
          return CardDetails;
        case CardMode.REVIEWS:
          return WrappedCardReviews;
      }

      return CardOverview;
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
    children: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.node),
      PropTypes.node
    ]).isRequired,
  };

  return WithCardTabsState;
};

export default withCardTabsState;

