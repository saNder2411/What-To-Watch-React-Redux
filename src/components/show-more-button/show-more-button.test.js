import React from 'react';
import renderer from 'react-test-renderer';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import ShowMoreButton from './show-more-button.jsx';

const mockStore = configureStore();


const changeShowingCardsAmount = () => {};


describe(`Render ShowMoreButton`, () => {
  it(`Should ShowMoreButton render correctly when there are no cards to render`, () => {
    const store = mockStore({
      genre: `All Genre`,
      cardsData: [],
      filteredCardsLength: 0,
      showingCardsAmount: 8,
      reviews: [],
      newReviews: [],
      promoCardData: {},
    });
    const markup = renderer
      .create(
          <Provider store={store}>
            <BrowserRouter>
              <Switch>
                <Route
                  path='/'
                  render={() => {
                    return <ShowMoreButton changeShowingCardsAmount={changeShowingCardsAmount}/>;
                  }}
                />
              </Switch>
            </BrowserRouter>
          </Provider>
      )
      .toJSON();

    expect(markup).toMatchSnapshot();
  });

  it(`Should ShowMoreButton render correctly`, () => {
    const store = mockStore({
      genre: `All Genre`,
      cardsData: [],
      filteredCardsLength: 10,
      showingCardsAmount: 8,
      reviews: [],
      newReviews: [],
      promoCardData: {},
    });
    const markup = renderer
      .create(
          <Provider store={store}>
            <BrowserRouter>
              <Switch>
                <Route
                  path='/'
                  render={() => {
                    return <ShowMoreButton changeShowingCardsAmount={changeShowingCardsAmount}/>;
                  }}
                />
              </Switch>
            </BrowserRouter>
          </Provider>
      )
      .toJSON();

    expect(markup).toMatchSnapshot();
  });
});

