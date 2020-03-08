import React from 'react';
import renderer from 'react-test-renderer';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import WithPreviewCardsListState from '../../hocs/with-preview-cards-list-state/with-preview-cards-list-state.jsx';
import withActiveItem from '../../hocs/with-active-item/with-active-item.jsx';

const mockStore = configureStore();

const store = mockStore({
  genre: `All Genre`,
  cardsData: [],
  promoCardData: {},
  reviews: [],
  newReviews: [],
});

const MockWrappedPreviewCardsList = withActiveItem(WithPreviewCardsListState);

describe(`Render PreviewCardsList`, () => {
  it(`Should PreviewCardsList render correctly in Main`, () => {
    const markup = renderer
      .create(
          <Provider store={store} >
            <BrowserRouter>
              <Switch>
                <Route
                  path='/'
                  exact
                  render={() => <MockWrappedPreviewCardsList />}
                />
              </Switch>
            </BrowserRouter>
          </Provider>
      )
      .toJSON();

    expect(markup).toMatchSnapshot();
  });

  it(`Should PreviewCardsList render correctly in CardScreen`, () => {
    const markup = renderer
      .create(
          <Provider store={store} >
            <BrowserRouter>
              <Switch>
                <Route
                  path='/cards:id'
                  exact
                  render={() => <MockWrappedPreviewCardsList selectedCardId={0}/>}
                />
              </Switch>
            </BrowserRouter>
          </Provider>
      )
      .toJSON();

    expect(markup).toMatchSnapshot();
  });
});
