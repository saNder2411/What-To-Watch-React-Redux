import React from 'react';
import renderer from 'react-test-renderer';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import CardsService from '../../services/cards-service.js';
import {CardsServiceProvider} from '../cards-service-context/cards-service-context.js';
import createAPI from '../../api.js';
import thunk from 'redux-thunk';

import SignInForm from './sign-in-form.jsx';
import withSignInFormState from '../../hocs/with-sign-in-form-state/with-sign-in-form-state.jsx';

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

const WrappedSignInForm = withSignInFormState(SignInForm);


it(`Should SignInContent render correctly`, () => {
  const markup = renderer
    .create(
        <Provider store={store}>
          <CardsServiceProvider value={cardsService}>
            <BrowserRouter>
              <Switch>
                <Route
                  path='/'
                  component={WrappedSignInForm}
                />
              </Switch>
            </BrowserRouter>
          </CardsServiceProvider>
        </Provider>
    )
    .toJSON();

  expect(markup).toMatchSnapshot();
});
