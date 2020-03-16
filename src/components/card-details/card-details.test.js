import React from 'react';
import renderer from 'react-test-renderer';
import CardDetails from './card-details.jsx';

const data = {
  director: `Steven Spielberg`,
  starring: [`Judi Dench`, `Robert De Niro`, `Leonardo DiCaprio`],
  runtime: `1h 58m`,
  genre: `Drama`,
  released: 1978,
};

it(`Should CardDetails render correctly`, () => {
  const markup = renderer
    .create(<CardDetails {...data} />)
    .toJSON();

  expect(markup).toMatchSnapshot();
});
