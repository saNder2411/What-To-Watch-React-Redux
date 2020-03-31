import * as React from 'react';
import * as renderer from 'react-test-renderer';
import Spinner from './spinner';


it(`Should Spinner render correctly`, () => {
  const markup = renderer
    .create(<Spinner />)
    .toJSON();

  expect(markup).toMatchSnapshot();
});
