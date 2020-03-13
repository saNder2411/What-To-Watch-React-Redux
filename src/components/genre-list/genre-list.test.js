import React from 'react';
import renderer from 'react-test-renderer';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import GenreList from './genre-list.jsx';
import CardsService from '../../services/cards-service.js';
import {CardsServiceProvider} from '../cards-service-context/cards-service-context.js';
import withData from '../../hocs/with-data/with-data.jsx';
import withActiveItem from '../../hocs/with-active-item/with-active-item.jsx';
import {DataTypes} from '../../const.js';

const cardsService = new CardsService();

const mockStore = configureStore();

const store = mockStore({
  genre: `All Genre`,
  cardsData: [],
  reviews: [],
  newReviews: [],
  promoCardData: {},
});

const MockWrappedGenreList = withData(withActiveItem(GenreList), DataTypes.CARDS_DATA);


it(`Should GenreList render correctly`, () => {
  const markup = renderer
    .create(
        <Provider store={store}>
          <CardsServiceProvider value={cardsService}>
            <BrowserRouter>
              <Switch>
                <Route
                  path='/'
                  exact
                  component={MockWrappedGenreList}
                />
              </Switch>
            </BrowserRouter>
          </CardsServiceProvider>
        </Provider>
    )
    .toJSON();

  expect(markup).toMatchSnapshot();
});
