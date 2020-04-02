import {updateUserCardList as reducer} from './user-card-list';
import ActionTypes from '../../action-types/action-types';

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
    isFavorite: true,
    runtime: 98,
    genre: `Drama`,
    released: 1989,
  },
];


const mockError = {
  message: `Error!`,
};

const initialState = {
  userCardList: {
    userCardsData: [],
    userCardsLoading: true,
    userCardsError: null,
  }
};

describe(`Reducer user-card-list work correctly`, () => {
  it(`Reducer without additional parameters should return initial state`, () => {
    expect(reducer(void 0, {})).toEqual({
      userCardsData: [],
      userCardsLoading: true,
      userCardsError: null,
    });
  });

  it(`Reducer should update user-card-list by request user-card-list data`, () => {
    expect(reducer(initialState, {type: ActionTypes.FETCH_USER_CARDS_REQUEST}))
      .toEqual({
        userCardsData: [],
        userCardsLoading: true,
        userCardsError: null,
      });
  });

  it(`Reducer should update user-card-list by loaded user-card-list data`, () => {
    expect(reducer(initialState, {type: ActionTypes.FETCH_USER_CARDS_SUCCESS, payload: mockCardsData}))
      .toEqual({
        userCardsData: mockCardsData,
        userCardsLoading: false,
        userCardsError: null,
      });
  });

  it(`Reducer should update user-card-list by error user-card-list data`, () => {
    expect(reducer(initialState, {type: ActionTypes.FETCH_USER_CARDS_FAILURE, payload: mockError}))
      .toEqual({
        userCardsData: [],
        userCardsLoading: false,
        userCardsError: mockError,
      });
  });
});
