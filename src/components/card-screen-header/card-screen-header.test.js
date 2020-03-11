import React from 'react';
import renderer from 'react-test-renderer';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import CardScreenHeader from './card-screen-header.jsx';
import Header from '../header/header.jsx';
import HeaderCardDesc from '../header-card-desc/header-card-desc.jsx';
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
const release = 1989;

it(`Should CardScreenHeader render correctly`, () => {
  const markup = renderer
    .create(
        <Provider store={store}>
          <BrowserRouter>
            <Switch>
              <Route
                path='/'
              >
                <CardScreenHeader >
                  <Header isCardScreen />
                  <HeaderCardDesc title={title} genre={genre} date={release} >
                    <HeaderButtons isCardScreen selectedCardId={`1`}/>
                  </HeaderCardDesc>
                </CardScreenHeader>
              </Route>
            </Switch>
          </BrowserRouter>
        </Provider>
    )
    .toJSON();

  expect(markup).toMatchSnapshot();
});
