import React from 'react';
import renderer from 'react-test-renderer';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';
import App from './app.jsx';
import CardsService from '../../services/cards-service.js';
import {CardsServiceProvider} from '../cards-service-context/cards-service-context.js';

const cardsService = new CardsService();
const mockStore = configureStore([]);

it(`Should App render correctly`, () => {

  const store = mockStore({
    genre: `All Genre`,
    cardsData: [],
    filteredCardsLength: 20,
    showingCardsAmount: 8,
    reviews: [],
    newReviews: [],
    promoCardData: {},
  });

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
