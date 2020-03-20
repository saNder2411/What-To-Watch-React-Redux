import React, {PureComponent, createRef} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import compose from '../../hocs/compose/compose.js';
import withCardsService from '../../hocs/with-cards-service/with-cards-service.jsx';

import FetchActions from '../../actions/fetch-actions/fetch-actions.js';
import {DataTypes} from '../../const.js';

import Logo from '../logo/logo.jsx';
import Footer from '../footer/footer.jsx';

const SignInContent = ({emailRef, passwordRef, onSubmit}) => {

  return (
    <div className="sign-in user-page__content">
      <form
        action="#"
        className="sign-in__form"
        onSubmit={onSubmit}
      >
        <div className="sign-in__fields">
          <div className="sign-in__field">
            <input className="sign-in__input" type="email" placeholder="Email address" name="user-email" id="user-email"
              ref={emailRef}
            />
            <label className="sign-in__label visually-hidden" htmlFor="user-email">Email address</label>
          </div>
          <div className="sign-in__field">
            <input className="sign-in__input" type="password" placeholder="Password" name="user-password" id="user-password" autoComplete="off"
              ref={passwordRef}
            />
            <label className="sign-in__label visually-hidden" htmlFor="user-password">Password</label>
          </div>
        </div>
        <div className="sign-in__submit">
          <button className="sign-in__btn" type="submit">Sign in</button>
        </div>
      </form>
    </div>
  );
};

SignInContent.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  emailRef: PropTypes.object.isRequired,
  passwordRef: PropTypes.object.isRequired,
};


class SignInScreen extends PureComponent {
  constructor(props) {
    super(props);

    this._emailRef = createRef();
    this._passwordRef = createRef();

    this._handleSubmit = this._handleSubmit.bind(this);
  }

  _handleSubmit(evt) {
    evt.preventDefault();

    const {loginUser} = this.props;
    const userData = {
      email: this._emailRef.current.value,
      password: this._passwordRef.current.value,
    };

    loginUser(DataTypes.USER_AUTH, userData);
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
  loginUser: PropTypes.func.isRequired,
};

const mapStatToProps = (state) => ({state});

const mapDispatchToProps = (dispatch, ownProps) => {
  const {cardsService} = ownProps;

  return {
    loginUser: (dataType, userData) => dispatch(FetchActions.fetchData(cardsService)(dataType, userData)),
  };
};

export default compose(withCardsService, connect(mapStatToProps, mapDispatchToProps))(SignInScreen);
