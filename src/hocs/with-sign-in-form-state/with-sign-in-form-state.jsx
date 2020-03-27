import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {Redirect} from 'react-router-dom';

import Spinner from '../../components/spinner/spinner.jsx';

import {connect} from 'react-redux';
import compose from '../compose/compose.js';
import {getUserAuthStatus, getUserDataLoading, getUserDataError} from '../../reducers/user/selectors.js';
import withCardsService from '../with-cards-service/with-cards-service.jsx';
import SendActions from '../../actions/send-actions/send-actions.js';
import ActionCreator from '../../actions/action-creator.js';

import {DataTypes} from '../../const.js';
import {getAppRoute} from '../../utils/utils.js';


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
      const {isAuthorized, userDataLoading, userDataError, setDefaultCardListState} = this.props;
      const content = userDataLoading ?
        <Spinner/> :
        <Component
          {...this.state}
          error={userDataError}
          onInputChange={this._handleInputChange}
          onFormSubmit={this._handleFormSubmit}
        />;

      if (isAuthorized) {
        setDefaultCardListState();

        return <Redirect to={getAppRoute().ROOT} />;
      }

      return content;
    }
  }

  WithSignInFormState.propTypes = {
    authorizesUser: PropTypes.func.isRequired,
    setDefaultCardListState: PropTypes.func.isRequired,
    isAuthorized: PropTypes.bool.isRequired,
    userDataLoading: PropTypes.bool.isRequired,
    userDataError: PropTypes.object,
  };

  const mapStatToProps = (state) => ({
    isAuthorized: getUserAuthStatus(state),
    userDataLoading: getUserDataLoading(state),
    userDataError: getUserDataError(state),
  });

  const mapDispatchToProps = (dispatch, ownProps) => {
    const {cardsService} = ownProps;

    return {
      authorizesUser: (dataType, formUserData) => dispatch(SendActions.sendData(cardsService)(dataType, formUserData)),
      setDefaultCardListState: () => dispatch(ActionCreator.setDefaultCardListState()),
    };
  };

  return compose(withCardsService, connect(mapStatToProps, mapDispatchToProps))(WithSignInFormState);
};

export default withSignInFormState;
