import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {Redirect} from 'react-router-dom';

import Spinner from '../../components/spinner/spinner.jsx';

import {connect} from 'react-redux';
import compose from '../compose/compose.js';
import {getAuthStatus, getAuthLoading, getAuthError} from '../../reducers/user/selectors.js';
import withCardsService from '../with-cards-service/with-cards-service.jsx';
import SendActions from '../../actions/send-actions/send-actions.js';
import {DataTypes} from '../../const.js';

const EMAIL_REGEXP = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

const withSignInFormState = (Component) => {

  class WithSignInFormState extends PureComponent {

    constructor(props) {
      super(props);
      this.state = {
        email: ``,
        password: ``,
        isValidEmail: true,
      };

      this._handleFormSubmit = this._handleFormSubmit.bind(this);
      this._handleInputChange = this._handleInputChange.bind(this);
    }

    componentWillUnmount() {
      this.setState({email: ``, password: ``, isValidEmail: true});
    }

    _handleFormSubmit(evt) {
      evt.preventDefault();

      const {authorizesUser} = this.props;
      const {email, password} = this.state;
      const formUserData = {email, password};
      const isValidEmail = this._checkValidEmail(email);

      if (isValidEmail) {
        authorizesUser(DataTypes.SEND_USER_AUTH_DATA, formUserData);
        this.setState({email: ``, password: ``, isValidEmail: true});
        return;
      }

      this.setState({email: ``, password: ``, isValidEmail});
    }

    _handleInputChange(evt) {
      const {type, value} = evt.target;
      this.setState({[type]: value});
    }

    _checkValidEmail(email) {

      return EMAIL_REGEXP.test(email);
    }

    render() {
      const {isAuthorized, authLoading, authError} = this.props;
      const content = authLoading ?
        <Spinner/> :
        <Component
          {...this.state}
          error={authError}
          onInputChange={this._handleInputChange}
          onFormSubmit={this._handleFormSubmit}
        />;

      return isAuthorized ? <Redirect to="/" /> : content;
    }
  }

  WithSignInFormState.propTypes = {
    authorizesUser: PropTypes.func.isRequired,
    isAuthorized: PropTypes.bool.isRequired,
    authLoading: PropTypes.bool.isRequired,
    authError: PropTypes.object,
  };

  const mapStatToProps = (state) => ({
    isAuthorized: getAuthStatus(state),
    authLoading: getAuthLoading(state),
    authError: getAuthError(state),
  });

  const mapDispatchToProps = (dispatch, ownProps) => {
    const {cardsService} = ownProps;

    return {
      authorizesUser: (dataType, formUserData) => dispatch(SendActions.sendData(cardsService)(dataType, formUserData)),
    };
  };

  return compose(withCardsService, connect(mapStatToProps, mapDispatchToProps))(WithSignInFormState);
};

export default withSignInFormState;
