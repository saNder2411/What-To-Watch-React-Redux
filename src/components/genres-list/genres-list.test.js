import React from 'react';
import renderer from 'react-test-renderer';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import GenresList from './genres-list.jsx';

const mockStore = configureStore();
const store = mockStore({
  genre: `All Genre`,
  cardsData: [],
  reviews: [],
  newReviews: [],
  promoCardData: {},
});
const labels = [`All Genre`, `Comedies`, `Crime`, `Documentary`, `War`];
const selectedGenre = `All Genre`;
const onGenresListItemClick = () => {};


it(`Should GenresList render correctly`, () => {
  const markup = renderer
    .create(
        <Provider store={store}>
          <BrowserRouter>
            <Switch>
              <Route
                path='/'
                render={() => {
                  return <GenresList
                    labels={labels}
                    selectedGenre={selectedGenre}
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
