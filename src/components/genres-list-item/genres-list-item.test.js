import React from 'react';
import renderer from 'react-test-renderer';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import GenresListItem from './genres-list-item.jsx';

const mockStore = configureStore();
const store = mockStore({
  genre: `All Genre`,
  cardsData: [],
  reviews: [],
  newReviews: [],
  promoCardData: {},
});
const label = `All Genre`;
const isActive = true;
const onGenresListItemClick = () => {};


it(`Should GenresListItem render correctly`, () => {
  const markup = renderer
    .create(
        <Provider store={store}>
          <BrowserRouter>
            <Switch>
              <Route
                path='/'
                render={() => {
                  return <GenresListItem
                    label={label}
                    isActive={isActive}
                    onGenresListItemClick={onGenresListItemClick}/>;
                }}
              />
            </Switch>
          </BrowserRouter>
        </Provider>
    )
    .toJSON();

  expect(markup).toMatchSnapshot();
});
