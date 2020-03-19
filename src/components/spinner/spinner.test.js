import React from 'react';
import renderer from 'react-test-renderer';
import Spinner from './spinner.jsx';


it(`Should Spinner render correctly in CardScreen Header`, () => {
  const markup = renderer
    .create(<Spinner />)
    .toJSON();

  expect(markup).toMatchSnapshot();
});
