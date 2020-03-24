import React from 'react';
import renderer from 'react-test-renderer';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import CardsService from '../../services/cards-service.js';
import createAPI from '../../api';
import {CardsServiceProvider} from '../cards-service-context/cards-service-context.js';
import thunk from 'redux-thunk';

import SignInScreen from './sign-in-screen.jsx';

const API = createAPI(() => {});
const cardsService = new CardsService(API);
const mockStore = configureStore([thunk]);

const store = mockStore({
  user: {
    userData: {},
    isAuthorized: false,
    authLoading: false,
    authError: null,
  },
});


it(`Should SignInScreen render correctly`, () => {
  const markup = renderer.create(
      <Provider store={store}>
        <CardsServiceProvider value={cardsService}>
          <BrowserRouter>
            <Switch>
              <Route
                path='/'
                exact
                component={SignInScreen}
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
