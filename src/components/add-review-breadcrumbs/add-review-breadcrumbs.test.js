import React from 'react';
import renderer from 'react-test-renderer';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import thunk from 'redux-thunk';

import AddReviewBreadcrumbs from './add-review-breadcrumbs.jsx';

const mockStore = configureStore([thunk]);
const store = mockStore({
  appState: {
    screen: `MAIN`,
    selectedCardId: 1,
  },
});

const title = `Titanic`;

it(`Should AddReviewBreadcrumbs render correctly`, () => {
  const markup = renderer
    .create(
        <Provider store={store}>
          <BrowserRouter>
            <Switch>
              <Route path='/'>
                <AddReviewBreadcrumbs title={title} selectedCardId={1} />
              </Route>
            </Switch>
          </BrowserRouter>
        </Provider>
    )
    .toJSON();

  expect(markup).toMatchSnapshot();
});
