import * as React from 'react';
import * as renderer from 'react-test-renderer';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import CardsService from '../../services/cards-service';
import {CardsServiceProvider} from '../cards-service-context/cards-service-context';
import createAPI from '../../api';
import thunk from 'redux-thunk';

import SignInForm from './sign-in-form';
import withSignInFormState from '../../hocs/with-sign-in-form-state/with-sign-in-form-state';

const API = createAPI(() => {});
const cardsService = new CardsService(API);
const mockStore = configureStore([thunk]);


const store = mockStore({
  user: {
    userData: {},
    isAuthorized: false,
    userDataLoading: false,
    userDataError: null,
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
