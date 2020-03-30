import React from 'react';
import renderer from 'react-test-renderer';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import GenreListItem from './genre-list-item';
import thunk from 'redux-thunk';

const mockStore = configureStore([thunk]);
const store = mockStore({});
const label = `All Genre`;
const isActive = true;
const onGenreListItemClick = () => {};


it(`Should GenreListItem render correctly`, () => {
  const markup = renderer
    .create(
        <Provider store={store}>
          <BrowserRouter>
            <Switch>
              <Route
                path='/'
                render={() => {
                  return <GenreListItem
                    label={label}
                    isActive={isActive}
                    onGenreListItemClick={onGenreListItemClick}/>;
                }}
              />
            </Switch>
          </BrowserRouter>
        </Provider>
    )
    .toJSON();

  expect(markup).toMatchSnapshot();
});
