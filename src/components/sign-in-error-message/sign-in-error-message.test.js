import React from 'react';
import renderer from 'react-test-renderer';
import SignInErrorMessage from './ sign-in-error-message.jsx';

const error = {
  status: 400,
};

describe(`Render SignInErrorMessage`, () => {
  it(`Should SignInErrorMessage render correctly when bad validation email`, () => {
    const markup = renderer
      .create(<SignInErrorMessage isValidEmail={false} />)
      .toJSON();

    expect(markup).toMatchSnapshot();
  });

  it(`Should SignInErrorMessage render correctly when bad request data`, () => {
    const markup = renderer
      .create(<SignInErrorMessage error={error} isValidEmail={true} />)
      .toJSON();

    expect(markup).toMatchSnapshot();
  });
});

