import React from 'react';
import renderer from 'react-test-renderer';
import App from './app.jsx';

const promoCardData = {
  title: `True Detective`,
  genre: `Triller`,
  date: `2019`,
};

const previewCardTitles = [
  `Bohemian Rhapsody`,
  `Macbeth`,
  `Aviator`,
  `We need to talk about Kevin`,
  `What We Do in the Shadows`,
  `Revenant`,
  `Johnny English`,
  `Shutter Island`,
  `Pulp Fiction`,
  `No Country for Old Men`,
  `Snatch`,
  `Moonrise Kingdom`,
  `Seven Years in Tibet`,
];

it(`Should App render correctly`, () => {
  const markup = renderer
    .create(<App promoCardData={promoCardData} previewCardTitles={previewCardTitles} />)
    .toJSON();

  expect(markup).toMatchSnapshot();
});
