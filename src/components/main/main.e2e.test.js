import React from 'react';
import {configure, mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Main from './main.jsx';

configure({
  adapter: new Adapter(),
});

const mockData = {
  promoCardData: {
    title: `True Detective`,
    genre: `Triller`,
    date: `2019`,
  },
  cardsData: [
    {
      id: 0,
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
  ],
};

it(`Should call onPreviewCardTitleClick when preview card title be pressed`, () => {
  const handlePreviewCardClick = jest.fn();

  const main = mount(
      <Main
        data={mockData}
        previewCardHandlers={[handlePreviewCardClick]}
      />
  );

  const firstPreviewCard = main.find(`.small-movie-card`).first();

  firstPreviewCard.simulate(`click`);

  expect(handlePreviewCardClick.mock.calls.length).toBe(1);

});
