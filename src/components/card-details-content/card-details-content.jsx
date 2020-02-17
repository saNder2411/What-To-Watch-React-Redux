import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import CardDetailsNav from '../card-details-nav/card-details-nav.jsx';
import CardDetailsOverview from '../card-details-overview/card-details-overview.jsx';
import CardDetailsDetails from '../card-details-details/card-details-details.jsx';
import CardDetailsReviews from '../card-details-reviews/card-details-reviews.jsx';

const CardDetailsMode = {
  OVERVIEW: `overview`,
  DETAILS: `details`,
  REVIEWS: `reviews`
};

export default class CardDetailsContent extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      cardDetailsMode: `overview`,
    };

    this._updatesState = this._updatesState.bind(this);
  }

  _updatesState(stateValue) {
    this.setState({cardDetailsMode: stateValue});
  }

  _renderContent() {
    const {cardDetailsMode} = this.state;
    const {data} = this.props;

    switch (cardDetailsMode) {
      case CardDetailsMode.DETAILS:
        return <CardDetailsDetails data={data} />;
      case CardDetailsMode.REVIEWS:
        return <CardDetailsReviews data={data} />;
    }

    return <CardDetailsOverview data={data} />;
  }

  render() {

    return (
      <div className="movie-card__desc">
        <CardDetailsNav onContentChange={this._updatesState}/>
        {this._renderContent()}
      </div>
    );
  }
}

CardDetailsContent.propTypes = {
  data: PropTypes.object.isRequired,
};
