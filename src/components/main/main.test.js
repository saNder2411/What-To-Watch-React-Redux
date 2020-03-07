import React from 'react';
import renderer from 'react-test-renderer';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Main from './main.jsx';
import CardsService from '../../services/cards-service.js';
import {CardsServiceProvider} from '../cards-service-context/cards-service-context.js';

const cardsService = new CardsService();

const mockStore = configureStore();

const store = mockStore({
  genre: `All Genre`,
  cardsData: [],
  filteredCardsLength: 0,
  showingCardsAmount: 8,
  reviews: [],
  newReviews: [],
  promoCardData: {},
});


it(`Should Main render correctly`, () => {
  const markup = renderer.create(
      <Provider store={store}>
        <CardsServiceProvider value={cardsService}>
          <BrowserRouter>
            <Switch>
              <Route
                path='/'
                exact
                render={() => <Main />}
              />
            </Switch>
          </BrowserRouter>
        </CardsServiceProvider>
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
