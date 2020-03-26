import React from 'react';
import renderer from 'react-test-renderer';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Logo from './logo.jsx';
import thunk from 'redux-thunk';

const mockStore = configureStore([thunk]);
const store = mockStore({
  user: {
    userData: {},
    isAuthorized: false,
    userDataLoading: false,
    userDataError: null,
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
  cardListState: {
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


describe(`Render Logo`, () => {
  it(`Should Logo render correctly in CardScreen Header`, () => {
    const markup = renderer
      .create(
          <Provider store={store}>
            <BrowserRouter>
              <Switch>
                <Route
                  path='/'
                  render={() => <Logo />}
                />
              </Switch>
            </BrowserRouter>
          </Provider>
      )
      .toJSON();

    expect(markup).toMatchSnapshot();
  });

  it(`Should Logo render correctly in Main Header`, () => {
    const markup = renderer
      .create(
          <Provider store={store}>
            <BrowserRouter>
              <Switch>
                <Route
                  path='/'
                  component={Logo}
                />
              </Switch>
            </BrowserRouter>
          </Provider>
      )
      .toJSON();

    expect(markup).toMatchSnapshot();
  });

  it(`Should Logo render correctly in CardScreen Footer`, () => {
    const markup = renderer
      .create(
          <Provider store={store}>
            <BrowserRouter>
              <Switch>
                <Route
                  path='/'
                  render={() => <Logo toMain isFooterLogo />}
                />
              </Switch>
            </BrowserRouter>
          </Provider>
      )
      .toJSON();

    expect(markup).toMatchSnapshot();
  });

  it(`Should Logo render correctly in Main Footer`, () => {
    const markup = renderer
      .create(
          <Provider store={store}>
            <BrowserRouter>
              <Switch>
                <Route
                  path='/'
                  render={() => <Logo isFooterLogo />}
                />
              </Switch>
            </BrowserRouter>
          </Provider>
      )
      .toJSON();

    expect(markup).toMatchSnapshot();
  });
});

