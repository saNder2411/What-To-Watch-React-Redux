import React from 'react';
import PropTypes from 'prop-types';
import SignInErrorMessage from '../sign-in-error-message/ sign-in-error-message.jsx';


const SignInContent = ({emailRef, passwordRef, error, onSubmit}) => {

  return (
    <div className="sign-in user-page__content">
      <form
        action=""
        className="sign-in__form"
        onSubmit={onSubmit}
      >
        <SignInErrorMessage error={error}/>
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
  emailRef: PropTypes.object.isRequired,
  passwordRef: PropTypes.object.isRequired,
  onSubmit: PropTypes.func.isRequired,
  error: PropTypes.object,
};

export default SignInContent;
