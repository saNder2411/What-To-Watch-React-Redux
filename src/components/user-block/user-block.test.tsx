import * as React from 'react';
import * as renderer from 'react-test-renderer';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import CardsService from '../../services/cards-service';
import {CardsServiceProvider} from '../cards-service-context/cards-service-context';
import createAPI from '../../api';
import thunk from 'redux-thunk';

import UserBlock from './user-block';

const API = createAPI(() => {});
const cardsService = new CardsService(API);
const mockStore = configureStore([thunk]);

const mockUserDate = {
  id: 1,
  email: `vova@gmail.com`,
  name: `Vlad`,
  avatarSrc: `avatar_url`,
};


describe(`Render UserBlock`, () => {
  it(`Should UserBlock render correctly when user no authorization`, () => {
    const store = mockStore({
      user: {
        userData: {},
        isAuthorized: false,
        userDataLoading: false,
        userDataError: null,
      },
    });
    const markup = renderer
      .create(
          <Provider store={store}>
            <CardsServiceProvider value={cardsService}>
              <BrowserRouter>
                <Switch>
                  <Route
                    path='/'
                    component={UserBlock}
                  />
                </Switch>
              </BrowserRouter>
            </CardsServiceProvider>
          </Provider>
      )
      .toJSON();

    expect(markup).toMatchSnapshot();
  });

  it(`Should UserBlock render correctly when user authorization`, () => {
    const store = mockStore({
      user: {
        userData: mockUserDate,
        isAuthorized: true,
        userDataLoading: false,
        userDataError: null,
      },
    });
    const markup = renderer
      .create(
          <Provider store={store}>
            <CardsServiceProvider value={cardsService}>
              <BrowserRouter>
                <Switch>
                  <Route
                    path='/'
                    component={UserBlock}
                  />
                </Switch>
              </BrowserRouter>
            </CardsServiceProvider>
          </Provider>
      )
      .toJSON();

    expect(markup).toMatchSnapshot();
  });
});

