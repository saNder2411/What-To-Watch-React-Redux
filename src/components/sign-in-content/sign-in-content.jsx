import React from 'react';
import PropTypes from 'prop-types';


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

export default SignInContent;
