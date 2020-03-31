import * as React from 'react';
import * as renderer from 'react-test-renderer';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import GenreListItem from './genre-list-item';
import thunk from 'redux-thunk';
import {noop} from '../../utils/utils';


const mockStore = configureStore([thunk]);
const store = mockStore({});
const label = `All Genre`;
const isActive = true;

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
                    onGenreListItemClick={noop}/>;
                }}
              />
            </Switch>
          </BrowserRouter>
        </Provider>
    )
    .toJSON();

  expect(markup).toMatchSnapshot();
});
