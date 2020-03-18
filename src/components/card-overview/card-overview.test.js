import React from 'react';
import renderer from 'react-test-renderer';
import CardOverview from './card-overview.jsx';

const data = {
  description: `In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave's friend and protege.`,
  rating: 9,
  scoresCount: 100,
  director: `Steven Spielberg`,
  starring: [`Judi Dench`, `Robert De Niro`, `Leonardo DiCaprio`],
};

it(`Should CardOverview render correctly`, () => {
  const markup = renderer
    .create(<CardOverview {...data} />)
    .toJSON();

  expect(markup).toMatchSnapshot();
});
