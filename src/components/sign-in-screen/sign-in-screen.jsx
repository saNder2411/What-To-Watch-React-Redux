import React, {PureComponent, createRef} from 'react';
import PropTypes from 'prop-types';

import SignInContent from '../sign-in-content/sign-in-content.jsx';
import Logo from '../logo/logo.jsx';
import Footer from '../footer/footer.jsx';

import {connect} from 'react-redux';
import compose from '../../hocs/compose/compose.js';
import withCardsService from '../../hocs/with-cards-service/with-cards-service.jsx';
import AuthActions from '../../actions/auth-actions/auth-actions.js';
import {AuthActionTypes} from '../../const.js';


class SignInScreen extends PureComponent {

  constructor(props) {
    super(props);

    this._emailRef = createRef();
    this._passwordRef = createRef();

    this._handleSubmit = this._handleSubmit.bind(this);
  }

  _handleSubmit(evt) {
    evt.preventDefault();

    const {authorizesUser} = this.props;
    const formUserData = {
      email: this._emailRef.current.value,
      password: this._passwordRef.current.value,
    };

    authorizesUser(AuthActionTypes.USER_AUTH, formUserData);
  }

  render() {

    return (
      <div className="user-page">
        <header className="page-header user-page__head">
          <Logo toMain />
          <h1 className="page-title user-page__title">Sign in</h1>
        </header>

        <SignInContent
          emailRef={this._emailRef}
          passwordRef={this._passwordRef}
          onSubmit={this._handleSubmit} />

        <Footer>
          <Logo toMain isFooterLogo />
        </Footer>
      </div>
    );
  }
}

SignInScreen.propTypes = {
  authorizesUser: PropTypes.func.isRequired,
};

const mapStatToProps = (state) => ({state});

const mapDispatchToProps = (dispatch, ownProps) => {
  const {cardsService} = ownProps;

  return {
    authorizesUser: (authActionType, formUserData) => dispatch(AuthActions.authActionCreator(cardsService)(authActionType, formUserData)),
  };
};

export default compose(withCardsService, connect(mapStatToProps, mapDispatchToProps))(SignInScreen);
