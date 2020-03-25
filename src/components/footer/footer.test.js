import React from 'react';
import renderer from 'react-test-renderer';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import thunk from 'redux-thunk';

import Footer from './footer.jsx';
import Logo from '../logo/logo.jsx';


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


describe(`Render Footer`, () => {
  it(`Should Footer render correctly in CardScreen`, () => {
    const markup = renderer
      .create(
          <Provider store={store}>
            <BrowserRouter>
              <Switch>
                <Route path='/'>
                  <Footer>
                    <Logo toMain isFooterLogo/>
                  </Footer>
                </Route>
              </Switch>
            </BrowserRouter>
          </Provider>
      )
      .toJSON();

    expect(markup).toMatchSnapshot();
  });

  it(`Should Footer render correctly in Main`, () => {
    const markup = renderer
      .create(
          <Provider store={store}>
            <BrowserRouter>
              <Switch>
                <Route path='/'>
                  <Footer>
                    <Logo isFooterLogo/>
                  </Footer>
                </Route>
              </Switch>
            </BrowserRouter>
          </Provider>
      )
      .toJSON();

    expect(markup).toMatchSnapshot();
  });
});

