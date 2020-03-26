import React from 'react';
import renderer from 'react-test-renderer';
import {Provider} from 'react-redux';
import {CardsServiceProvider} from '../cards-service-context/cards-service-context.js';
import configureStore from 'redux-mock-store';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import createAPI from '../../api.js';
import CardsService from '../../services/cards-service.js';
import thunk from 'redux-thunk';

import Header from './header.jsx';
import Logo from '../logo/logo.jsx';
import UserBlock from '../user-block/user-block.jsx';
import AddReviewBreadcrumbs from '../add-review-breadcrumbs/add-review-breadcrumbs.jsx';


const API = createAPI(() => {});
const cardsService = new CardsService(API);

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
const backgroundImage = `bg-the-grand-budapest-hotel`;
const title = `Bohemian Rhapsody`;


describe(`Render Header`, () => {
  it(`Should Header render correctly in CardScreen`, () => {
    const markup = renderer
      .create(
          <Provider store={store}>
            <CardsServiceProvider value={cardsService}>
              <BrowserRouter>
                <Switch>
                  <Route path='/'>
                    <Header title={title} backgroundImage={backgroundImage}>
                      <Logo />
                      <UserBlock />
                    </Header>
                  </Route>
                </Switch>
              </BrowserRouter>
            </CardsServiceProvider>
          </Provider>
      )
      .toJSON();

    expect(markup).toMatchSnapshot();
  });

  it(`Should Header render correctly in AddReviewScreen`, () => {
    const markup = renderer
      .create(
          <Provider store={store}>
            <CardsServiceProvider value={cardsService}>
              <BrowserRouter>
                <Switch>
                  <Route path='/'>
                    <Header title={title} backgroundImage={backgroundImage}>
                      <Logo />
                      <UserBlock />
                      <AddReviewBreadcrumbs title={title} selectedCardId={`1`} />
                    </Header>
                  </Route>
                </Switch>
              </BrowserRouter>
            </CardsServiceProvider>
          </Provider>
      )
      .toJSON();

    expect(markup).toMatchSnapshot();
  });

  it(`Should Header render correctly in Main`, () => {
    const markup = renderer
      .create(
          <Provider store={store}>
            <CardsServiceProvider value={cardsService}>
              <BrowserRouter>
                <Switch>
                  <Route path='/'>
                    <Header title={title} backgroundImage={backgroundImage}>
                      <Logo />
                      <UserBlock />
                    </Header>
                  </Route>
                </Switch>
              </BrowserRouter>
            </CardsServiceProvider>
          </Provider>
      )
      .toJSON();

    expect(markup).toMatchSnapshot();
  });
});

