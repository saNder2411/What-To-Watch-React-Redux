import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

import Spinner from '../../components/spinner/spinner.jsx';

import {connect} from 'react-redux';
import compose from '../compose/compose.js';
import withCardsService from '../with-cards-service/with-cards-service.jsx';
import {getReviewsLoading, getReviewsError} from '../../reducers/reviews/selectors.js';

import SendActions from '../../actions/send-actions/send-actions.js';
import {DataTypes} from '../../const.js';

const ReviewLengthRange = {
  MIN: 50,
  MAX: 400,
};

const withAddReviewFormState = (Component) => {
  class WithAddReviewFormState extends PureComponent {

    constructor(props) {
      super(props);
      this.state = {
        rating: 0,
        comment: ``,
      };

      this._handleFormSubmit = this._handleFormSubmit.bind(this);
      this._handleRadioChange = this._handleRadioChange.bind(this);
      this._handleTextareaChange = this._handleTextareaChange.bind(this);
    }

    _handleFormSubmit(evt) {
      evt.preventDefault();
      const {sendReview} = this.props;
      const reviewData = this.state;

      sendReview(DataTypes.SEND_REVIEW_DATA, reviewData);
      this.setState({
        rating: 0,
        comment: ``,
      });
    }

    _handleRadioChange(evt) {
      const rating = +evt.target.value;

      this.setState({rating});
    }

    _handleTextareaChange(evt) {
      const {value} = evt.target;

      this.setState({comment: value});
    }

    render() {
      const {rating, comment} = this.state;
      const isValidForm = rating > 0 && comment.length >= ReviewLengthRange.MIN && comment.length <= ReviewLengthRange.MAX;
      const {reviewsLoading, reviewsError} = this.props;

      return reviewsLoading ?
        <Spinner /> :
        <Component
          isValidForm={isValidForm}
          rating={rating}
          comment={comment}
          error={reviewsError}
          onFormSubmit={this._handleFormSubmit}
          onRadioChange={this._handleRadioChange}
          onTextareaChange={this._handleTextareaChange}
        />;
    }
  }

  WithAddReviewFormState.propTypes = {
    reviewsLoading: PropTypes.bool.isRequired,
    reviewsError: PropTypes.object,
    sendReview: PropTypes.func.isRequired,
  };

  const mapStateToProps = (state) => ({
    reviewsLoading: getReviewsLoading(state),
    reviewsError: getReviewsError(state),
  });

  const mapDispatchToProps = (dispatch, ownProps) => {
    const {cardsService, selectedCardIdFromHistory} = ownProps;

    return {
      sendReview: (datType, reviewData) => dispatch(SendActions.sendData(cardsService, selectedCardIdFromHistory)(datType, reviewData)),
    };
  };

  return compose(withCardsService, connect(mapStateToProps, mapDispatchToProps))(WithAddReviewFormState);
};

export default withAddReviewFormState;
