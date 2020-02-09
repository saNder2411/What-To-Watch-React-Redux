import React from 'react';
import renderer from 'react-test-renderer';
import PreviewCardsList from './preview-cards-list.jsx';

const previewCardTitles = [
  `Fantastic Beasts: The Crimes of Grindelwald`,
  `Revenant`,
  `Johnny English`,
  `Shutter Island`,
  `Pulp Fiction`,
  `No Country for Old Men`,
  `Snatch`,
  `Moonrise Kingdom`,
  `Seven Years in Tibet`,
  `Midnight Special`,
  `War of the Worlds`,
  `Dardjeeling Limited`,
  `Orlando`,
  `Mindhunter`,
  `Midnight Special`,
];

it(`Should PreviewCardsList render correctly`, () => {
  const markup = renderer
    .create(<PreviewCardsList previewCardTitles={previewCardTitles} />)
    .toJSON();

  expect(markup).toMatchSnapshot();
});
