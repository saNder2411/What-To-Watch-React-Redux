import * as React from 'react';
import {AuthError, Error} from '../../types';


type Props = {
  error: Error | null;
  isValidEmail: boolean;
}

const SignInErrorMessage: React.FC<Props> = ({error, isValidEmail}: Props) => {
  const badValidEmailMessage = !isValidEmail ? <p>Please enter a valid email address</p> : null;
  const badDataMessage = error && error.response.status === AuthError.BAD_DATA_REQUEST ?
    <p>We can’t recognize this email <br/> and password combination. Please try again.</p> : null;

  if (error || !isValidEmail) {
    return (
      <div className="sign-in__message">
        {badValidEmailMessage}
        {badDataMessage}
      </div>
    );
  }

  return null;
};

export default SignInErrorMessage;
