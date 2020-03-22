import React from 'react';

import SignInContent from '../sign-in-content/sign-in-content.jsx';
import Logo from '../logo/logo.jsx';
import Footer from '../footer/footer.jsx';
import withAuthFormState from '../../hocs/with-auth-form-state/with-auth-form-state.jsx';

const WrappedSignInContent = withAuthFormState(SignInContent);

const SignInScreen = () => {

  return (
    <div className="user-page">
      <header className="page-header user-page__head">
        <Logo toMain />
        <h1 className="page-title user-page__title">Sign in</h1>
      </header>

      <WrappedSignInContent />

      <Footer>
        <Logo toMain isFooterLogo />
      </Footer>
    </div>
  );
};

export default SignInScreen;
