import React from 'react';

import SignInForm from '../sign-in-form/sign-in-form.jsx';
import Logo from '../logo/logo.jsx';
import Footer from '../footer/footer.jsx';
import withAuthFormState from '../../hocs/with-auth-form-state/with-auth-form-state.jsx';

const WrappedSignInForm = withAuthFormState(SignInForm);

const SignInScreen = () => {

  return (
    <div className="user-page">
      <header className="page-header user-page__head">
        <Logo toMain />
        <h1 className="page-title user-page__title">Sign in</h1>
      </header>

      <WrappedSignInForm />

      <Footer>
        <Logo toMain isFooterLogo />
      </Footer>
    </div>
  );
};

export default SignInScreen;
