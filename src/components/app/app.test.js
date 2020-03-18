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

it(`Should App render correctly`, () => {

  const store = mockStore({
    promoCard: {
      promoCardData: {},
      promoLoading: true,
      promoError: null,
    },
    cardList: {
      cardsData: [],
      cardsLoading: true,
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
