import React from 'react';
import renderer from 'react-test-renderer';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import HeaderCardDesc from './header-card-desc.jsx';
import HeaderButtons from '../header-buttons/header-buttons.jsx';

const mockStore = configureStore();
const store = mockStore({
  genre: `All Genre`,
  cardsData: [],
  reviews: [],
  newReviews: [],
  promoCardData: {},
});

const title = `Bohemian Rhapsody`;
const genre = `Drama`;
const date = 1989;


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
                  <HeaderCardDesc title={title} genre={genre} date={date} >
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
                  <HeaderCardDesc title={title} genre={genre} date={date} >
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
});

