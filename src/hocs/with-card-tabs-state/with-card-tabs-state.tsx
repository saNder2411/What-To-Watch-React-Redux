import * as React from 'react';


import {CardMode} from '../../const';


const withCardTabsState = (Component) => {

  class WithCardTabsState extends React.PureComponent {

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

  return WithCardTabsState;
};

export default withCardTabsState;

