import * as React from 'react';

import {Redirect} from 'react-router-dom';

import Spinner from '../../components/spinner/spinner';

import {connect} from 'react-redux';
import compose from '../compose/compose';
import {getUserAuthStatus, getUserDataLoading, getUserDataError} from '../../reducers/user/selectors';
import withCardsService from '../with-cards-service/with-cards-service';
import SendActions from '../../actions/send-actions/send-actions';
import ActionCreator from '../../actions/action-creator';

import {DataTypes} from '../../const';
import {getAppRoute} from '../../utils/utils';


const EMAIL_REGEXP = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

const withSignInFormState = (Component) => {

  class WithSignInFormState extends React.PureComponent {

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
