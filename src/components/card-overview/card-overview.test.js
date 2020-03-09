import React from 'react';
import renderer from 'react-test-renderer';
import CardOverview from './card-overview.jsx';

const data = {
  descriptions: [
    `In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave's friend and protege.`,
    `Gustave prides himself on providing first-class service to the hotel's guests, including satisfying the sexual needs of the many elderly women who stay there. When one of Gustave's lovers dies mysteriously, Gustave finds himself the recipient of a priceless painting and the chief suspect in her murder.`
  ],
  rating: `10`,
  amountVoice: 100,
  director: `Steven Spielberg`,
  actors: [`Judi Dench`, `Robert De Niro`, `Leonardo DiCaprio`],
};

it(`Should CardOverview render correctly`, () => {
  const markup = renderer
    .create(<CardOverview {...data} />)
    .toJSON();

  expect(markup).toMatchSnapshot();
});
