import reducer from './reducer.js';
import ActionTypes from '../action-types/action-types.js';
import {DEFAULT_GENRE} from '../const.js';

const mockPromoCardData = {
  title: `The Grand Budapest Hotel`,
  genre: `Drama`,
  date: 2014,
  poster: `the-grand-budapest-hotel-poster`,
};

const mockGenre = `Drama`;

const mockCardsData = [
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
      previewVideoSrc: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
    },
    detailsData: {
      director: `Steven Spielberg`,
      actors: [
        `Judi Dench`, `Robert De Niro`, `Leonardo DiCaprio`, `Morgan Freeman`, `Tom Hanks`,
      ],
      runtime: `1h 58m`,
      genre: `Drama`,
      release: 1989,
    },
    reviewsId: [5, 6, 7, 8],
  },
];

const initialState = {
  genre: DEFAULT_GENRE,
  cardsData: [],
  promoCardData: {},
  reviews: [],
  newReviews: [],
};

describe(`Reducer work correctly`, () => {
  it(`Reducer without additional parameters should return initial state`, () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  it(`Reducer should update the current state to the set value`, () => {
    expect(reducer(initialState, {type: ActionTypes.CARDS_LOADED, payload: mockCardsData}))
      .toEqual({
        genre: DEFAULT_GENRE,
        cardsData: mockCardsData,
        promoCardData: {},
        reviews: [],
        newReviews: [],
      });

    expect(reducer(initialState, {type: ActionTypes.PROMO_CARD_LOADED, payload: mockPromoCardData}))
    .toEqual({
      genre: DEFAULT_GENRE,
      cardsData: [],
      promoCardData: mockPromoCardData,
      reviews: [],
      newReviews: [],
    });

    expect(reducer(initialState, {type: ActionTypes.CHANGE_GENRE, payload: mockGenre}))
    .toEqual({
      genre: mockGenre,
      cardsData: [],
      promoCardData: {},
      reviews: [],
      newReviews: [],
    });
  });
});
