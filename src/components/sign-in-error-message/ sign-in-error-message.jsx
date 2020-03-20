import React from 'react';
import PropTypes from 'prop-types';
import {Error} from '../../const.js';

const SignInErrorMessage = ({error}) => {

  if (error && error.status === Error.BAD_DATA_REQUEST) {
    return (
      <div className="sign-in__message">
        <p>We can’t recognize this email <br/> and password combination. Please try again.</p>
      </div>
    );
  }

  return null;
};

SignInErrorMessage.propTypes = {
  error: PropTypes.object,
};

export default SignInErrorMessage;
