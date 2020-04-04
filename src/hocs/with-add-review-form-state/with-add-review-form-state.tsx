import * as React from 'react';

import Spinner from '../../components/spinner/spinner';

import {connect} from 'react-redux';
import compose from '../compose/compose';
import withCardsService from '../with-cards-service/with-cards-service';
import {getReviewsLoading, getReviewsError, getIsReviewAdded} from '../../reducers/reviews/selectors';

import SendActions from '../../actions/send-actions/send-actions';
import {DataTypes} from '../../types';
import {getSelectedCardId} from '../../reducers/app-state/selectors';
import {Redirect} from 'react-router-dom';
import {getAppRoute} from '../../utils/utils';


enum ReviewLengthRange {
  MIN = 50,
  MAX = 400,
}

type Props = {
  selectedCardId: number;
  reviewsLoading: boolean;
  reviewsError: Error | null;
  isReviewAdded: boolean;
  sendReview: (dataType: DataTypes, reviewData: {}, selectedCardId: number) => void;
}

type State = {
  rating: number;
  comment: string;
}

const withAddReviewFormState = (Component) => {

  class WithAddReviewFormState extends React.PureComponent<Props, State> {

    constructor(props: Props) {
      super(props);
      this.state = {
        rating: 0,
        comment: ``,
      };

      this.handleFormSubmit = this.handleFormSubmit.bind(this);
      this.handleRadioChange = this.handleRadioChange.bind(this);
      this.handleTextareaChange = this.handleTextareaChange.bind(this);
      this.handleTextareaKeyDown = this.handleTextareaKeyDown.bind(this);
    }

    private handleFormSubmit(evt) {
      evt.preventDefault();
      const {selectedCardId, sendReview} = this.props;
      const reviewData = this.state;

      sendReview(DataTypes.SEND_REVIEW_DATA, reviewData, selectedCardId);
    }

    private handleRadioChange(evt) {
      const rating = +evt.target.value;

      this.setState({rating});
    }

    private handleTextareaChange(evt) {
      const {value} = evt.target;

      this.setState({comment: value});
    }

    private handleTextareaKeyDown(evt, isValidForm) {
      const isCtrlKey = evt.ctrlKey;
      const isEnterKey = evt.key === `Enter`;

      if (isCtrlKey && isEnterKey && isValidForm) {
        this.handleFormSubmit(evt);
      }
    }

    render() {
      const {rating, comment} = this.state;
      const isValidForm = rating > 0 && comment.length >= ReviewLengthRange.MIN && comment.length <= ReviewLengthRange.MAX;
      const {reviewsLoading, reviewsError, isReviewAdded, selectedCardId} = this.props;

      if (isReviewAdded) {
        return <Redirect to={getAppRoute(selectedCardId.toString()).CARDS} />;
      }

      return reviewsLoading ?
        <Spinner /> :
        <Component
          isValidForm={isValidForm}
          rating={rating}
          comment={comment}
          error={reviewsError}
          onFormSubmit={this.handleFormSubmit}
          onRadioChange={this.handleRadioChange}
          onTextareaChange={this.handleTextareaChange}
          onTextareaKeyDown={this.handleTextareaKeyDown}
        />;
    }
  }

  const mapStateToProps = (state) => ({
    reviewsLoading: getReviewsLoading(state),
    reviewsError: getReviewsError(state),
    isReviewAdded: getIsReviewAdded(state),
    selectedCardId: getSelectedCardId(state),
  });

  const mapDispatchToProps = (dispatch, ownProps) => {
    const {cardsService} = ownProps;

    return {
      sendReview: (dataType, reviewData, selectedCardId) => dispatch(SendActions.sendData(cardsService)(dataType, reviewData, selectedCardId)),
    };
  };

  return compose(withCardsService, connect(mapStateToProps, mapDispatchToProps))(WithAddReviewFormState);
};

export default withAddReviewFormState;
