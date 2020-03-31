import * as React from 'react';
import * as renderer from 'react-test-renderer';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import HeaderCardDesc from './header-card-desc';
import HeaderButtons from '../header-buttons/header-buttons';
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
    previewVideoSrc: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
    videoSrc: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
    director: `Steven Spielberg`,
    starring: [
      `Judi Dench`, `Robert De Niro`, `Leonardo DiCaprio`, `Morgan Freeman`, `Tom Hanks`,
    ],
    runtime: 98,
    genre: `Drama`,
    released: 1989,
    isFavorite: true,
  },
];

const title = `Bohemian Rhapsody`;
const genre = `Drama`;
const released = 1989;


describe(`Render HeaderCardDesc`, () => {
  it(`Should HeaderCardDesc render correctly in CardScreen`, () => {
    const store = mockStore({
      appState: {
        screen: `CARD`,
        selectedCardId: 1,
      },
      user: {
        userData: {},
        isAuthorized: false,
        userDataLoading: false,
        userDataError: null,
      },
      cardList: {
        cardsData: mockCardsData,
        cardsLoading: false,
        cardsError: null,
        updatedCardLoading: false,
        updatedCardError: null,
      },
    });
    const markup = renderer
      .create(
          <Provider store={store}>
            <BrowserRouter>
              <Switch>
                <Route
                  path='/'
                >
                  <HeaderCardDesc title={title} genre={genre} released={released} >
                    <HeaderButtons />
                  </HeaderCardDesc>
                </Route>
              </Switch>
            </BrowserRouter>
          </Provider>
      )
      .toJSON();

    expect(markup).toMatchSnapshot();
  });

  it(`Should HeaderCardDesc render correctly in Main`, () => {
    const store = mockStore({
      appState: {
        screen: `MAIN`,
        selectedCardId: 1,
      },
      user: {
        userData: {},
        isAuthorized: false,
        userDataLoading: false,
        userDataError: null,
      },
      cardList: {
        cardsData: mockCardsData,
        cardsLoading: false,
        cardsError: null,
        updatedCardLoading: false,
        updatedCardError: null,
      },
    });
    const markup = renderer
      .create(
          <Provider store={store}>
            <BrowserRouter>
              <Switch>
                <Route
                  path='/'
                >
                  <HeaderCardDesc title={title} genre={genre} released={released}>
                    <HeaderButtons />
                  </HeaderCardDesc>
                </Route>
              </Switch>
            </BrowserRouter>
          </Provider>
      )
      .toJSON();

    expect(markup).toMatchSnapshot();
  });

  it(`Should HeaderCardDesc render correctly in CardScreen user auth`, () => {
    const authStore = mockStore({
      appState: {
        screen: `CARD`,
        selectedCardId: 1,
      },
      user: {
        userData: {},
        isAuthorized: true,
        userDataLoading: false,
        userDataError: null,
      },
      cardList: {
        cardsData: mockCardsData,
        cardsLoading: false,
        cardsError: null,
        updatedCardLoading: false,
        updatedCardError: null,
      },
    });
    const markup = renderer
      .create(
          <Provider store={authStore}>
            <BrowserRouter>
              <Switch>
                <Route path='/'>
                  <HeaderCardDesc title={title} genre={genre} released={released} >
                    <HeaderButtons />
                  </HeaderCardDesc>
                </Route>
              </Switch>
            </BrowserRouter>
          </Provider>
      )
      .toJSON();

    expect(markup).toMatchSnapshot();
  });
});

