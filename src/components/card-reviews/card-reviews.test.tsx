import * as React from 'react';
import * as renderer from 'react-test-renderer';
import CardReviews from './card-reviews';

const reviewsData = [
  {
    id: 5,
    comment: `Discerning travellers and Wes Anderson fans will luxuriate in the glorious Mittel-European kitsch of one of the director's funniest and most exquisitely designed movies in years.`,
    user: {
      id: 1,
      name: `Kate Muir`,
    },
    rating: 10,
    date: `2567`,
  },
  {
    id: 2,
    comment: `Discerning travellers and Wes Anderson fans will luxuriate in the glorious Mittel-European kitsch of one of the director's funniest and most exquisitely designed movies in years.`,
    user: {
      id: 3,
      name: `Kate`,
    },
    rating: 7,
    date: `1967`,
  }
];

it(`Should CardReviews render correctly`, () => {
  const markup = renderer
    .create(<CardReviews reviewsData={reviewsData} />)
    .toJSON();

  expect(markup).toMatchSnapshot();
});
