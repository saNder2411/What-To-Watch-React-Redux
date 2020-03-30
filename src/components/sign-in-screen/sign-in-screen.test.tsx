import * as React from 'react';
import * as renderer from 'react-test-renderer';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import CardsService from '../../services/cards-service';
import createAPI from '../../api';
import {CardsServiceProvider} from '../cards-service-context/cards-service-context';
import thunk from 'redux-thunk';

import SignInScreen from './sign-in-screen';

const API = createAPI(() => {});
const cardsService = new CardsService(API);
const mockStore = configureStore([thunk]);

const store = mockStore({
  appState: {
    screen: `MAIN`,
    selectedCardId: 1,
  },
  user: {
    userData: {},
    isAuthorized: false,
    userDataLoading: false,
    userDataError: null,
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
