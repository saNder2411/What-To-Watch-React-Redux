import React from 'react';
import renderer from 'react-test-renderer';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import CardScreen from './card-screen.jsx';
import thunk from 'redux-thunk';

const mockStore = configureStore([thunk]);
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
    videoSrc: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
    previewVideoSrc: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
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
    promoCardData: {},
    promoLoading: false,
    promoError: null,
  },
  cardList: {
    cardsData: mockCardsData,
    cardsLoading: false,
    cardsError: null,
  },
  filteredCardList: {
    genre: `Drama`,
    selectedCardId: 1,
    showingCardsAmount: 8,
  },
  reviews: {
    reviewsData: [],
    reviewsLoading: false,
    reviewsError: null,
  }
});

it(`Should CardScreen render correctly`, () => {
  const markup = renderer.create(
      <Provider store={store}>
        <BrowserRouter>
          <Switch>
            <Route
              path='/'
              render={() => <CardScreen selectedCardId={`1`}/>}
            />
          </Switch>
        </BrowserRouter>
      </Provider>,
      {
        createNodeMock: () => {
          return {};
        }
      }
  )
  .toJSON();

  expect(markup).toMatchSnapshot();
});
