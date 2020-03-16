import React from 'react';
import renderer from 'react-test-renderer';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import MainHeader from './main-header.jsx';
import CardsService from '../../services/cards-service.js';
import {CardsServiceProvider} from '../cards-service-context/cards-service-context.js';
import withData from '../../hocs/with-data/with-data.jsx';
import {DataTypes} from '../../const.js';

const cardsService = new CardsService();

const mockPromoCardData = {
  title: `The Grand Budapest Hotel`,
  genre: `Drama`,
  date: 2014,
  posterImage: `the-grand-budapest-hotel-poster`,
};

const mockStore = configureStore();

const store = mockStore({
  genre: `All Genre`,
  cardsData: [],
  promoCardData: mockPromoCardData,
  reviews: [],
  newReviews: [],
});

const MockWrapped = withData(MainHeader, DataTypes.PROMO_DATA);

it(`Should MainHeader render correctly`, () => {
  const markup = renderer.create(
      <Provider store={store}>
        <CardsServiceProvider value={cardsService}>
          <BrowserRouter>
            <Switch>
              <Route
                path='/'
                exact
                component={MockWrapped}
              />
            </Switch>
          </BrowserRouter>
        </CardsServiceProvider>
      </Provider>
  )
  .toJSON();

  expect(markup).toMatchSnapshot();
});
