import React from 'react';
import renderer from 'react-test-renderer';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import HeaderCardDesc from './header-card-desc.jsx';
import HeaderButtons from '../header-buttons/header-buttons.jsx';
import thunk from 'redux-thunk';

const mockStore = configureStore([thunk]);
const store = mockStore({
  user: {
    userData: {},
    isAuthorized: false,
    userDataLoading: false,
    userDataError: null,
  }
});

const title = `Bohemian Rhapsody`;
const genre = `Drama`;
const released = 1989;


describe(`Render HeaderCardDesc`, () => {
  it(`Should HeaderCardDesc render correctly in CardScreen`, () => {
    const markup = renderer
      .create(
          <Provider store={store}>
            <BrowserRouter>
              <Switch>
                <Route
                  path='/'
                >
                  <HeaderCardDesc title={title} genre={genre} released={released} >
                    <HeaderButtons isCardScreen selectedCardId={`1`}/>
                  </HeaderCardDesc>
                </Route>
              </Switch>
            </BrowserRouter>
          </Provider>
      )
      .toJSON();

    expect(markup).toMatchSnapshot();
  });

  it(`Should HeaderCardDesc render correctly in Main`, () => {
    const markup = renderer
      .create(
          <Provider store={store}>
            <BrowserRouter>
              <Switch>
                <Route
                  path='/'
                >
                  <HeaderCardDesc title={title} genre={genre} released={released}>
                    <HeaderButtons />
                  </HeaderCardDesc>
                </Route>
              </Switch>
            </BrowserRouter>
          </Provider>
      )
      .toJSON();

    expect(markup).toMatchSnapshot();
  });

  it(`Should HeaderCardDesc render correctly in CardScreen user auth`, () => {
    const authStore = mockStore({
      user: {
        userData: {},
        isAuthorized: true,
        userDataLoading: false,
        userDataError: null,
      },
    });
    const markup = renderer
      .create(
          <Provider store={authStore}>
            <BrowserRouter>
              <Switch>
                <Route path='/'>
                  <HeaderCardDesc title={title} genre={genre} released={released} >
                    <HeaderButtons isCardScreen selectedCardId={`1`}/>
                  </HeaderCardDesc>
                </Route>
              </Switch>
            </BrowserRouter>
          </Provider>
      )
      .toJSON();

    expect(markup).toMatchSnapshot();
  });
});

