import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import CardNav from '../card-nav/card-nav.jsx';
import CardOverview from '../card-overview/card-overview.jsx';
import CardDetails from '../card-details/card-details.jsx';
import CardReviews from '../card-reviews/card-reviews.jsx';
import {CardMode} from '../../const.js';

export default class CardContent extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      cardMode: `overview`,
    };

    this._updatesState = this._updatesState.bind(this);
  }

  _updatesState(stateValue) {
    this.setState({cardMode: stateValue});
  }

  _renderContent() {
    const {cardMode} = this.state;
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

    return (
      <div className="movie-card__desc">
        <CardNav mode={this.state.cardMode} onContentChange={this._updatesState}/>
        {this._renderContent()}
      </div>
    );
  }
}

CardContent.propTypes = {
  data: PropTypes.object.isRequired,
};
