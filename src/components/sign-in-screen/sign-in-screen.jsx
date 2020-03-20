import React, {PureComponent, createRef} from 'react';
// import PropTypes from 'prop-types';

import Logo from '../logo/logo.jsx';
import Footer from '../footer/footer.jsx';

export default class SignInScreen extends PureComponent {
  constructor(props) {
    super(props);

    this._loginRef = createRef();
    this._passwordRef = createRef();

    this._handleSubmit = this._handleSubmit.bind(this);
  }

  _handleSubmit(evt) {
    evt.preventDefault();
  }

  render() {
    return (
      <div className="user-page">
        <header className="page-header user-page__head">
          <Logo toMain />
          <h1 className="page-title user-page__title">Sign in</h1>
        </header>

        <div className="sign-in user-page__content">
          <form
            action="#"
            className="sign-in__form"
            onSubmit={this._handleSubmit}
          >
            <div className="sign-in__fields">
              <div className="sign-in__field">
                <input className="sign-in__input" type="email" placeholder="Email address" name="user-email" id="user-email" />
                <label className="sign-in__label visually-hidden" htmlFor="user-email">Email address</label>
              </div>
              <div className="sign-in__field">
                <input className="sign-in__input" type="password" placeholder="Password" name="user-password" id="user-password" autoComplete="off"/>
                <label className="sign-in__label visually-hidden" htmlFor="user-password">Password</label>
              </div>
            </div>
            <div className="sign-in__submit">
              <button className="sign-in__btn" type="submit">Sign in</button>
            </div>
          </form>
        </div>

        <Footer>
          <Logo toMain isFooterLogo />
        </Footer>
      </div>
    );
  }
}

SignInScreen.propTypes = {};
