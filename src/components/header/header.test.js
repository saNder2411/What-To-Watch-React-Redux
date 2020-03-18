import React from 'react';
import renderer from 'react-test-renderer';
import {Provider} from 'react-redux';
import {CardsServiceProvider} from '../cards-service-context/cards-service-context.js';
import configureStore from 'redux-mock-store';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import createAPI from '../../api.js';
import CardsService from '../../services/cards-service.js';
import Header from './header.jsx';
import thunk from 'redux-thunk';

const API = createAPI(() => {});
const cardsService = new CardsService(API);

const mockStore = configureStore([thunk]);
const store = mockStore({
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
                    <Header isCardScreen title={title} backgroundImage={backgroundImage}/>
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
                    <Header title={title} backgroundImage={backgroundImage}/>
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

