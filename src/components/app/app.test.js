import React from 'react';
import renderer from 'react-test-renderer';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';
import App from './app.jsx';
import createAPI from '../../api';
import CardsService from '../../services/cards-service.js';
import thunk from 'redux-thunk';
import {CardsServiceProvider} from '../cards-service-context/cards-service-context.js';

const API = createAPI(() => {});
const cardsService = new CardsService(API);
const mockStore = configureStore([thunk]);

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
const store = mockStore({
  user: {
    userData: {},
    authStatus: `NO_AUTH`,
    authLoading: false,
    authError: null,
  },
  promoCard: {
    promoCardData: mockPromoCardData,
    promoLoading: false,
    promoError: null,
  },
  cardList: {
    cardsData: mockCardsData,
    cardsLoading: false,
    cardsError: null,
  },
  filteredCardList: {
    genre: `All genre`,
    selectedCardId: -1,
    showingCardsAmount: 1,
  },
  reviews: {
    reviewsData: [],
    reviewsLoading: false,
    reviewsError: null,
  }
});

it(`Should App render correctly`, () => {
  const markup = renderer
    .create(
        <Provider store={store}>
          <CardsServiceProvider value={cardsService}>
            <App />
          </CardsServiceProvider>
        </Provider>
    )
    .toJSON();

  expect(markup).toMatchSnapshot();
});
