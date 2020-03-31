import * as React from 'react';
import * as renderer from 'react-test-renderer';
import ErrorIndicator from './error-indicator';

const mockError = {
  message: `Error!`,
};

it(`Should ErrorIndicator render correctly`, () => {
  const markup = renderer
    .create(<ErrorIndicator error={mockError} />)
    .toJSON();

  expect(markup).toMatchSnapshot();
});
