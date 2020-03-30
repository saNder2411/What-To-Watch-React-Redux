import {updatePromoCard as reducer} from './promo-card';
import ActionTypes from '../../action-types/action-types';

const mockPromoCardData = {
  id: 1,
  backgroundImage: `bg-the-grand-budapest-hotel`,
  posterImage: `the-grand-budapest-hotel-poster`,
  previewImage: `img/bohemian-rhapsody.jpg`,
  title: `Bohemian Rhapsody`,
  description: `In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave's friend and protege.`,
  rating: 9,
  scoresCount: 100,
  previewVideoSrc: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
  videoSrc: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
  director: `Steven Spielberg`,
  starring: [
    `Judi Dench`, `Robert De Niro`, `Leonardo DiCaprio`, `Morgan Freeman`, `Tom Hanks`,
  ],
  runtime: 98,
  genre: `Drama`,
  released: 1989,
};

const mockError = {
  message: `Error!`,
};

const initialState = {
  promoCard: {
    promoCardData: {},
    promoLoading: true,
    promoError: null,
  }
};

describe(`Reducer promo-card work correctly`, () => {
  it(`Reducer without additional parameters should return initial state`, () => {
    expect(reducer(void 0, {})).toEqual({
      promoCardData: {},
      promoLoading: true,
      promoError: null,
    });
  });

  it(`Reducer should update promo-card by request card-list data`, () => {
    expect(reducer(initialState, {type: ActionTypes.FETCH_CARDS_REQUEST}))
      .toEqual({
        promoCardData: {},
        promoLoading: true,
        promoError: null,
      });
  });

  it(`Reducer should update promo-card by loaded promo-card data`, () => {
    expect(reducer(initialState, {type: ActionTypes.FETCH_PROMO_CARD_SUCCESS, payload: mockPromoCardData}))
      .toEqual({
        promoCardData: mockPromoCardData,
        promoLoading: false,
        promoError: null,
      });
  });

  it(`Reducer should update promo-card by error promo-card data`, () => {
    expect(reducer(initialState, {type: ActionTypes.FETCH_PROMO_CARD_FAILURE, payload: mockError}))
      .toEqual({
        promoCardData: {},
        promoLoading: false,
        promoError: mockError,
      });
  });
});
