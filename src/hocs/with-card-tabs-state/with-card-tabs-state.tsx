import * as React from 'react';
import {CardMode} from '../../types';

type Props = {
  children: Array<React.ReactNode>;
}

type State = {
  cardMode: string;
}

const withCardTabsState = (Component) => {

  class WithCardTabsState extends React.PureComponent<Props, State> {

    constructor(props: Props) {
      super(props);
      this.state = {
        cardMode: `overview`,
      };

      this.handleTabsNavClick = this.handleTabsNavClick.bind(this);
    }

    private handleTabsNavClick(evt, mode) {
      evt.preventDefault();
      this.setState({cardMode: mode});
    }

    private renderTab(cardMode) {
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
        <Component mode={cardMode} onTabsNavClick={this.handleTabsNavClick}>
          {this.renderTab(cardMode)}
        </Component>
      );
    }
  }

  return WithCardTabsState;
};

export default withCardTabsState;

