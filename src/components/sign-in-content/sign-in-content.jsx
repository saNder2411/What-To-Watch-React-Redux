import React from 'react';
import PropTypes from 'prop-types';
import SignInErrorMessage from '../sign-in-error-message/ sign-in-error-message.jsx';


const SignInContent = ({email, password, isValidEmail, error, onInputChange, onFormSubmit}) => {
  const emailClassName = isValidEmail ? `sign-in__field` : `sign-in__field sign-in__field--error`;

  return (
    <div className="sign-in user-page__content">
      <form
        action=""
        className="sign-in__form"
        onSubmit={onFormSubmit}
        noValidate
      >
        <SignInErrorMessage error={error} isValidEmail={isValidEmail}/>
        <div className="sign-in__fields">
          <div className={emailClassName}>
            <input className="sign-in__input" type="email" placeholder="Email address" name="user-email" id="user-email"
              onChange={onInputChange} value={email}
            />
            <label className="sign-in__label visually-hidden" htmlFor="user-email">Email address</label>
          </div>
          <div className="sign-in__field">
            <input className="sign-in__input" type="password" placeholder="Password" name="user-password" id="user-password" autoComplete="off"
              onChange={onInputChange} value={password}
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
  error: PropTypes.object,
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  isValidEmail: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onFormSubmit: PropTypes.func.isRequired,
};

export default SignInContent;
