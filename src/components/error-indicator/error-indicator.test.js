import React from 'react';
import renderer from 'react-test-renderer';
import ErrorIndicator from './error-indicator.jsx';

const mockErrorMessage = `Error!`;

it(`Should ErrorIndicator render correctly`, () => {
  const markup = renderer
    .create(<ErrorIndicator message={mockErrorMessage} />)
    .toJSON();

  expect(markup).toMatchSnapshot();
});
