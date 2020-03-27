import {updateCardList as reducer} from './card-list.js';
import ActionTypes from '../../action-types/action-types.js';

const mockCardsData = [
  {
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
    isFavorite: true,
    genre: `Drama`,
    released: 1989,
  },
];

const mockUpdatedCard = {
  id: 2,
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
  isFavorite: true,
  genre: `Drama`,
  released: 1989,
};

const mockError = {
  message: `Error!`,
};

const initialState = {
  cardList: {
    cardsData: [],
    cardsLoading: true,
    cardsError: null,
    updatedCardLoading: false,
    updatedCardError: null,
  }
};

describe(`Reducer card-list work correctly`, () => {
  it(`Reducer without additional parameters should return initial state`, () => {
    expect(reducer(void 0, {})).toEqual({
      cardsData: [],
      cardsLoading: true,
      cardsError: null,
      updatedCardLoading: false,
      updatedCardError: null,
    });
  });

  it(`Reducer should update card-list by request card-list data`, () => {
    expect(reducer(initialState, {type: ActionTypes.FETCH_CARDS_REQUEST}))
      .toEqual({
        cardsData: [],
        cardsLoading: true,
        cardsError: null,
        updatedCardLoading: false,
        updatedCardError: null,
      });
  });

  it(`Reducer should update card-list by loaded card-list data`, () => {
    expect(reducer(initialState, {type: ActionTypes.FETCH_CARDS_SUCCESS, payload: mockCardsData}))
      .toEqual({
        cardsData: mockCardsData,
        cardsLoading: false,
        cardsError: null,
        updatedCardLoading: false,
        updatedCardError: null,
      });
  });

  it(`Reducer should update card-list by error card-list data`, () => {
    expect(reducer(initialState, {type: ActionTypes.FETCH_CARDS_FAILURE, payload: mockError}))
      .toEqual({
        cardsData: [],
        cardsLoading: false,
        cardsError: mockError,
        updatedCardLoading: false,
        updatedCardError: null,
      });
  });


  it(`Reducer should update card-list by request updated card `, () => {
    expect(reducer(initialState, {type: ActionTypes.UPDATE_CARD_REQUEST}))
      .toEqual({
        cardsData: [],
        cardsLoading: true,
        cardsError: null,
        updatedCardLoading: true,
        updatedCardError: null,
      });
  });

  it(`Reducer should update card-list by loaded updated card`, () => {
    expect(reducer(initialState, {type: ActionTypes.UPDATE_CARD_SUCCESS, payload: mockUpdatedCard}))
      .toEqual({
        cardsData: [mockUpdatedCard],
        cardsLoading: true,
        cardsError: null,
        updatedCardLoading: false,
        updatedCardError: null,
      });
  });

  it(`Reducer should update card-list by error updated card`, () => {
    expect(reducer(initialState, {type: ActionTypes.UPDATE_CARD_FAILURE, payload: mockError}))
      .toEqual({
        cardsData: [],
        cardsLoading: true,
        cardsError: null,
        updatedCardLoading: false,
        updatedCardError: mockError,
      });
  });
});
