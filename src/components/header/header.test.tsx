import * as React from 'react';
import * as renderer from 'react-test-renderer';
import {Provider} from 'react-redux';
import {CardsServiceProvider} from '../cards-service-context/cards-service-context';
import configureStore from 'redux-mock-store';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import createAPI from '../../api';
import CardsService from '../../services/cards-service';
import thunk from 'redux-thunk';

import Header from './header';
import Logo from '../logo/logo';
import UserBlock from '../user-block/user-block';
import AddReviewBreadcrumbs from '../add-review-breadcrumbs/add-review-breadcrumbs';


const API = createAPI(() => {});
const cardsService = new CardsService(API);

const mockStore = configureStore([thunk]);
const backgroundImage = `bg-the-grand-budapest-hotel`;
const title = `Bohemian Rhapsody`;


describe(`Render Header`, () => {
  it(`Should Header render correctly in CardScreen`, () => {
    const store = mockStore({
      appState: {
        screen: `CARD`,
        selectedCardId: 1,
      },
      user: {
        isAuthorized: false,
        userData: {},
        userDataLoading: true,
        userDataError: null,
      },
    });
    const markup = renderer
      .create(
          <Provider store={store}>
            <CardsServiceProvider value={cardsService}>
              <BrowserRouter>
                <Switch>
                  <Route path='/'>
                    <Header title={title} backgroundImage={backgroundImage}>
                      <Logo />
                      <UserBlock />
                    </Header>
                  </Route>
                </Switch>
              </BrowserRouter>
            </CardsServiceProvider>
          </Provider>
      )
      .toJSON();

    expect(markup).toMatchSnapshot();
  });

  it(`Should Header render correctly in AddReviewScreen`, () => {
    const store = mockStore({
      appState: {
        screen: `ADD_REVIEW`,
        selectedCardId: 1,
      },
      user: {
        isAuthorized: false,
        userData: {},
        userDataLoading: true,
        userDataError: null,
      },
    });
    const markup = renderer
      .create(
          <Provider store={store}>
            <CardsServiceProvider value={cardsService}>
              <BrowserRouter>
                <Switch>
                  <Route path='/'>
                    <Header title={title} backgroundImage={backgroundImage}>
                      <Logo />
                      <UserBlock />
                      <AddReviewBreadcrumbs title={title} />
                    </Header>
                  </Route>
                </Switch>
              </BrowserRouter>
            </CardsServiceProvider>
          </Provider>
      )
      .toJSON();

    expect(markup).toMatchSnapshot();
  });

  it(`Should Header render correctly in Main`, () => {
    const store = mockStore({
      appState: {
        screen: `MAIN`,
        selectedCardId: 1,
      },
      user: {
        isAuthorized: false,
        userData: {},
        userDataLoading: true,
        userDataError: null,
      },
    });
    const markup = renderer
      .create(
          <Provider store={store}>
            <CardsServiceProvider value={cardsService}>
              <BrowserRouter>
                <Switch>
                  <Route path='/'>
                    <Header title={title} backgroundImage={backgroundImage}>
                      <Logo />
                      <UserBlock />
                    </Header>
                  </Route>
                </Switch>
              </BrowserRouter>
            </CardsServiceProvider>
          </Provider>
      )
      .toJSON();

    expect(markup).toMatchSnapshot();
  });
});

