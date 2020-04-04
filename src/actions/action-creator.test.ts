import ActionCreator from './action-creator';
import ActionTypes from '../action-types/action-types';

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

const mockGenre = `Drama`;

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
    genre: `Drama`,
    released: 1989,
  },
];

const mockReviewsData = [
  {
    id: 5,
    comment: `Discerning travellers and Wes Anderson fans will luxuriate in the glorious Mittel-European kitsch of one of the director's funniest and most exquisitely designed movies in years.`,
    user: {
      id: 1,
      name: `Kate Muir`,
    },
    rating: 10,
    date: `2567`,
  },
  {
    id: 2,
    comment: `Discerning travellers and Wes Anderson fans will luxuriate in the glorious Mittel-European kitsch of one of the director's funniest and most exquisitely designed movies in years.`,
    user: {
      id: 3,
      name: `Kate`,
    },
    rating: 7,
    date: `1967`,
  }
];

const mockError = {
  message: `Error!`,
};

const mockUserDate = {
  id: 1,
  email: `vova@gmail.com`,
  name: `Vlad`,
  avatarSrc: `avatar_url`,
};

describe(`Action creators work correctly`, () => {
  it(`Action creator for promo card request returns correct action`, () => {
    expect(ActionCreator.promoCardRequested()).toEqual({type: ActionTypes.FETCH_PROMO_CARD_REQUEST});
  });

  it(`Action creator for update promo card data returns correct action`, () => {
    expect(ActionCreator.promoCardLoaded(mockPromoCardData)).toEqual({type: ActionTypes.FETCH_PROMO_CARD_SUCCESS, payload: mockPromoCardData});
  });

  it(`Action creator for promo card error request data returns correct action`, () => {
    expect(ActionCreator.promoCardError(mockError)).toEqual({type: ActionTypes.FETCH_PROMO_CARD_FAILURE, payload: mockError});
  });

  it(`Action creator for cards request returns correct action`, () => {
    expect(ActionCreator.cardsRequested()).toEqual({type: ActionTypes.FETCH_CARDS_REQUEST});
  });

  it(`Action creator for update cards returns correct action`, () => {
    expect(ActionCreator.cardsLoaded(mockCardsData)).toEqual({type: ActionTypes.FETCH_CARDS_SUCCESS, payload: mockCardsData});
  });

  it(`Action creator for cards error request returns correct action`, () => {
    expect(ActionCreator.cardsError(mockError)).toEqual({type: ActionTypes.FETCH_CARDS_FAILURE, payload: mockError});
  });

  it(`Action creator for reviews request returns correct action`, () => {
    expect(ActionCreator.reviewsRequested()).toEqual({type: ActionTypes.FETCH_REVIEWS_REQUEST});
  });

  it(`Action creator for update reviews returns correct action`, () => {
    expect(ActionCreator.reviewsLoaded(mockReviewsData)).toEqual({type: ActionTypes.FETCH_REVIEWS_SUCCESS, payload: mockReviewsData});
  });

  it(`Action creator for reviews error request returns correct action`, () => {
    expect(ActionCreator.reviewsError(mockError)).toEqual({type: ActionTypes.FETCH_REVIEWS_FAILURE, payload: mockError});
  });

  it(`Action creator for set default card list state returns correct action`, () => {
    expect(ActionCreator.setDefaultReviewAdded()).toEqual({type: ActionTypes.SET_DEFAULT_REVIEW_ADDED});
  });

  it(`Action creator for set default card list state returns correct action`, () => {
    expect(ActionCreator.setDefaultCardListState()).toEqual({type: ActionTypes.SET_DEFAULT_CARD_LIST_STATE});
  });

  it(`Action creator for change genre returns correct action`, () => {
    expect(ActionCreator.changeGenre(mockGenre)).toEqual({type: ActionTypes.CHANGE_GENRE, payload: mockGenre});
  });

  it(`Action creator for change showing cards amount returns correct action`, () => {
    expect(ActionCreator.changeShowingCardsAmount(8)).toEqual({type: ActionTypes.CHANGE_SHOWING_CARDS_AMOUNT, payload: 8});
  });

  it(`Action creator for change showing cards amount returns correct action`, () => {
    expect(ActionCreator.changeShowingCardsAmount(void 0)).toEqual({type: ActionTypes.CHANGE_SHOWING_CARDS_AMOUNT, payload: void 0});
  });

  it(`Action creator for auth request returns correct action`, () => {
    expect(ActionCreator.userDataRequested()).toEqual({type: ActionTypes.FETCH_USER_DATA_REQUEST});
  });

  it(`Action creator for update user auth data returns correct action`, () => {
    expect(ActionCreator.userDataLoaded(mockUserDate)).toEqual({type: ActionTypes.FETCH_USER_DATA_SUCCESS, payload: mockUserDate});
  });

  it(`Action creator for user auth error request returns correct action`, () => {
    expect(ActionCreator.userDataError(mockError)).toEqual({type: ActionTypes.FETCH_USER_DATA_FAILURE, payload: mockError});
  });

  it(`Action creator for user cards request returns correct action`, () => {
    expect(ActionCreator.userCardsRequested()).toEqual({type: ActionTypes.FETCH_USER_CARDS_REQUEST});
  });

  it(`Action creator for user cards loaded returns correct action`, () => {
    expect(ActionCreator.userCardsLoaded(mockCardsData)).toEqual({type: ActionTypes.FETCH_USER_CARDS_SUCCESS, payload: mockCardsData});
  });

  it(`Action creator for user cards error request returns correct action`, () => {
    expect(ActionCreator.userCardsError(mockError)).toEqual({type: ActionTypes.FETCH_USER_CARDS_FAILURE, payload: mockError});
  });

  it(`Action creator for change app screen returns correct action`, () => {
    expect(ActionCreator.changeAppScreen(`MAIN`)).toEqual({type: ActionTypes.CHANGE_APP_SCREEN, payload: `MAIN`});
  });

  it(`Action creator for change selected card returns correct action`, () => {
    expect(ActionCreator.changeSelectedCardId(10)).toEqual({type: ActionTypes.CHANGE_SELECTED_CARD, payload: 10});
  });

  it(`Action creator for updated card request returns correct action`, () => {
    expect(ActionCreator.updateCardRequested()).toEqual({type: ActionTypes.UPDATE_CARD_REQUEST});
  });

  it(`Action creator for updated card loaded returns correct action`, () => {
    expect(ActionCreator.updateCardLoaded(mockPromoCardData)).toEqual({type: ActionTypes.UPDATE_CARD_SUCCESS, payload: mockPromoCardData});
  });

  it(`Action creator for updated card error request returns correct action`, () => {
    expect(ActionCreator.updateCardError(mockError)).toEqual({type: ActionTypes.UPDATE_CARD_FAILURE, payload: mockError});
  });
});
