import React from 'react';
import renderer from 'react-test-renderer';
import CardReview from './card-review';

const review = {
  id: 5,
  comment: `Discerning travellers and Wes Anderson fans will luxuriate in the glorious Mittel-European kitsch of one of the director's funniest and most exquisitely designed movies in years.`,
  user: {
    id: 1,
    name: `Kate Muir`,
  },
  rating: 10,
  date: `2567`,
};

it(`Should CardReview render correctly`, () => {
  const markup = renderer
    .create(<CardReview {...review} />)
    .toJSON();

  expect(markup).toMatchSnapshot();
});
