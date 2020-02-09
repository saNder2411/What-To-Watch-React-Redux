import React from 'react';
import renderer from 'react-test-renderer';
import Main from './main.jsx';

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

it(`Should Main render correctly`, () => {
  const markup = renderer
    .create(<Main promoCardData={promoCardData} previewCardTitles={previewCardTitles} />)
    .toJSON();

  expect(markup).toMatchSnapshot();
});
