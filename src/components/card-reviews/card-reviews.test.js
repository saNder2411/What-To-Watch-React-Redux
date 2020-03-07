import React from 'react';
import renderer from 'react-test-renderer';
import CardReviews from './card-reviews.jsx';

const reviewsId = [879, 880, 881];

it(`Should CardReviews render correctly`, () => {
  const markup = renderer
    .create(<CardReviews reviewsId={reviewsId} />)
    .toJSON();

  expect(markup).toMatchSnapshot();
});
