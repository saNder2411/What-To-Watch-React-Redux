import * as React from 'react';

import SignInForm from '../sign-in-form/sign-in-form';
import Logo from '../logo/logo';
import Footer from '../footer/footer';
import withSignInFormState from '../../hocs/with-sign-in-form-state/with-sign-in-form-state';

const WrappedSignInForm = withSignInFormState(SignInForm);

const SignInScreen: React.FC = () => {

  return (
    <div className="user-page">
      <header className="page-header user-page__head">
        <Logo />
        <h1 className="page-title user-page__title">Sign in</h1>
      </header>

      <WrappedSignInForm />

      <Footer>
        <Logo isFooterLogo />
      </Footer>
    </div>
  );
};

export default SignInScreen;
