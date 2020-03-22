import React from 'react';
import renderer from 'react-test-renderer';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import CardsService from '../../services/cards-service.js';
import {CardsServiceProvider} from '../cards-service-context/cards-service-context.js';
import createAPI from '../../api.js';
import thunk from 'redux-thunk';

import SignInContent from './sign-in-content.jsx';
import withValidatedForm from '../../hocs/with-validated-form/with-validated-form.jsx';

const API = createAPI(() => {});
const cardsService = new CardsService(API);
const mockStore = configureStore([thunk]);


const store = mockStore({
  user: {
    userData: {},
    authStatus: `NO_AUTH`,
    authLoading: false,
    authError: null,
  },
});

const WrappedSignInContent = withValidatedForm(SignInContent);


it(`Should SignInContent render correctly`, () => {
  const markup = renderer
    .create(
        <Provider store={store}>
          <CardsServiceProvider value={cardsService}>
            <BrowserRouter>
              <Switch>
                <Route
                  path='/'
                  component={WrappedSignInContent}
                />
              </Switch>
            </BrowserRouter>
          </CardsServiceProvider>
        </Provider>
    )
    .toJSON();

  expect(markup).toMatchSnapshot();
});
