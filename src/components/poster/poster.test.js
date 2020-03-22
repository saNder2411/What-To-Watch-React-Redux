import React from 'react';
import renderer from 'react-test-renderer';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Poster from './poster.jsx';
import thunk from 'redux-thunk';

const mockStore = configureStore([thunk]);
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
    cardsData: [],
    cardsLoading: false,
    cardsError: null,
  },
  filteredCardList: {
    genre: `All genre`,
    selectedCardId: -1,
    showingCardsAmount: 8,
  },
  reviews: {
    reviewsData: [],
    reviewsLoading: false,
    reviewsError: null,
  }
});

const posterImage = `the-grand-budapest-hotel-poster`;
const title = `Terminator`;


describe(`Render Poster`, () => {
  it(`Should Poster render correctly in CardScreen`, () => {
    const markup = renderer
      .create(
          <Provider store={store}>
            <BrowserRouter>
              <Switch>
                <Route
                  path='/'
                  render={() => <Poster title={title} posterImage={posterImage} isCardScreen/>}
                />
              </Switch>
            </BrowserRouter>
          </Provider>
      )
      .toJSON();

    expect(markup).toMatchSnapshot();
  });

  it(`Should Poster render correctly in Main`, () => {
    const markup = renderer
      .create(
          <Provider store={store}>
            <BrowserRouter>
              <Switch>
                <Route
                  path='/'
                  render={() => <Poster title={title} posterImage={posterImage} />}
                />
              </Switch>
            </BrowserRouter>
          </Provider>
      )
      .toJSON();

    expect(markup).toMatchSnapshot();
  });
});

