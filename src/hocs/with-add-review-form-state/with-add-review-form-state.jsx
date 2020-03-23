import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

import Spinner from '../../components/spinner/spinner.jsx';

import {connect} from 'react-redux';
import compose from '../compose/compose.js';
import withCardsService from '../with-cards-service/with-cards-service.jsx';
import SendActions from '../../actions/send-actions/send-actions.js';
import {DataTypes, AuthStatus} from '../../const.js';

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
      const isValidForm = (rating > 0 && comment.length >= 5 && comment.length < 400) ? true : false;

      return (
        <Component
          isValidForm={isValidForm}
          rating={rating}
          comment={comment}
          onFormSubmit={this._handleFormSubmit}
          onRadioChange={this._handleRadioChange}
          onTextareaChange={this._handleTextareaChange}
        />
      );
    }
  }

  WithAddReviewFormState.propTypes = {};

  return compose(withCardsService, connect())(WithAddReviewFormState);
};

export default withAddReviewFormState;
