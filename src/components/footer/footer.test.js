import React from 'react';
import renderer from 'react-test-renderer';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import thunk from 'redux-thunk';

import Footer from './footer.jsx';
import Logo from '../logo/logo.jsx';


const mockStore = configureStore([thunk]);

describe(`Render Footer`, () => {
  it(`Should Footer render correctly in CardScreen`, () => {
    const store = mockStore({
      appState: {
        screen: `CARD`,
        selectedCardId: 1,
      },
    });
    const markup = renderer
      .create(
          <Provider store={store}>
            <BrowserRouter>
              <Switch>
                <Route path='/'>
                  <Footer>
                    <Logo isFooterLogo/>
                  </Footer>
                </Route>
              </Switch>
            </BrowserRouter>
          </Provider>
      )
      .toJSON();

    expect(markup).toMatchSnapshot();
  });

  it(`Should Footer render correctly in Main`, () => {
    const store = mockStore({
      appState: {
        screen: `MAIN`,
        selectedCardId: 1,
      },
    });
    const markup = renderer
      .create(
          <Provider store={store}>
            <BrowserRouter>
              <Switch>
                <Route path='/'>
                  <Footer>
                    <Logo isFooterLogo/>
                  </Footer>
                </Route>
              </Switch>
            </BrowserRouter>
          </Provider>
      )
      .toJSON();

    expect(markup).toMatchSnapshot();
  });
});

