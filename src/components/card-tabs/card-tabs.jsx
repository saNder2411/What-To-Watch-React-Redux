import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import CardTabsNav from '../card-tabs-nav/card-tabs-nav.jsx';
import CardOverview from '../card-overview/card-overview.jsx';
import CardDetails from '../card-details/card-details.jsx';
import CardReviews from '../card-reviews/card-reviews.jsx';
import {CardMode} from '../../const.js';

export default class CardTabs extends PureComponent {
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
    const {data} = this.props;

    switch (cardMode) {
      case CardMode.DETAILS:
        return <CardDetails data={data} />;
      case CardMode.REVIEWS:
        return <CardReviews data={data} />;
    }

    return <CardOverview data={data} />;
  }

  render() {
    const {cardMode} = this.state;

    return (
      <div className="movie-card__desc">
        <CardTabsNav mode={cardMode} onTabsNavClick={this._handleTabsNavClick}/>
        {this._renderTab(cardMode)}
      </div>
    );
  }
}

CardTabs.propTypes = {
  data: PropTypes.object.isRequired,
};
