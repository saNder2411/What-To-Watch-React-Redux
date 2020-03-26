import React from 'react';
import renderer from 'react-test-renderer';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import HeaderButtons from './header-buttons.jsx';
import thunk from 'redux-thunk';

const mockStore = configureStore([thunk]);
const store = mockStore({
  user: {
    userData: {},
    isAuthorized: false,
    userDataLoading: false,
    userDataError: null,
  },
});

describe(`Render HeaderButtons`, () => {
  it(`Should HeaderButtons render correctly in CardScreen`, () => {
    const markup = renderer
      .create(
          <Provider store={store}>
            <BrowserRouter>
              <Switch>
                <Route
                  path='/'
                  render={() => <HeaderButtons selectedCardId={`1`}/>}
                />
              </Switch>
            </BrowserRouter>
          </Provider>
      )
      .toJSON();

    expect(markup).toMatchSnapshot();
  });

  it(`Should HeaderButtons render correctly in Main`, () => {
    const markup = renderer
      .create(
          <Provider store={store}>
            <BrowserRouter>
              <Switch>
                <Route
                  path='/'
                  component={HeaderButtons}
                />
              </Switch>
            </BrowserRouter>
          </Provider>
      )
      .toJSON();

    expect(markup).toMatchSnapshot();
  });

  it(`Should HeaderButtons render correctly in CardScreen user auth`, () => {
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
                <Route
                  path='/'
                  render={() => <HeaderButtons selectedCardId={`1`}/>}
                />
              </Switch>
            </BrowserRouter>
          </Provider>
      )
      .toJSON();

    expect(markup).toMatchSnapshot();
  });
});

