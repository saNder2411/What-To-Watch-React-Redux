import React from 'react';
import renderer from 'react-test-renderer';
import PreviewCardsList from './preview-cards-list.jsx';

const cardsData = [
  {
    id: 1,
    overviewData: {
      promoPoster: `bg-the-grand-budapest-hotel`,
      poster: `the-grand-budapest-hotel-poster`,
      previewPoster: `img/bohemian-rhapsody.jpg`,
      title: `Bohemian Rhapsody`,
      descriptions: [
        `In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave's friend and protege.`,
        `Gustave prides himself on providing first-class service to the hotel's guests, including satisfying the sexual needs of the many elderly women who stay there. When one of Gustave's lovers dies mysteriously, Gustave finds himself the recipient of a priceless painting and the chief suspect in her murder.`
      ],
      rating: `10`,
      amountVoice: 100,
    },
    detailsData: {
      director: `Steven Spielberg`,
      actors: [
        `Judi Dench`, `Robert De Niro`, `Leonardo DiCaprio`, `Morgan Freeman`, `Tom Hanks`,
      ],
      runtime: `1h 58m`,
      genre: `Drama`,
      release: `1989`,
    },
    reviewsId: [5, 6, 7, 8],
  },
];

const previewCardHandlers = [() => {}];

it(`Should PreviewCardsList render correctly`, () => {
  const markup = renderer
    .create(<PreviewCardsList cardsData={cardsData} previewCardHandlers={previewCardHandlers} />)
    .toJSON();

  expect(markup).toMatchSnapshot();
});
