import React from 'react';
import renderer from 'react-test-renderer';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import CardsService from '../../services/cards-service';
import {CardsServiceProvider} from '../cards-service-context/cards-service-context';
import createAPI from '../../api';
import thunk from 'redux-thunk';

import AddReviewForm from './add-review-form';
import withAddReviewFormState from '../../hocs/with-add-review-form-state/with-add-review-form-state';

const API = createAPI(() => {});
const cardsService = new CardsService(API);
const mockStore = configureStore([thunk]);


const store = mockStore({
  appState: {
    screen: `MAIN`,
    selectedCardId: 1,
  },
  reviews: {
    reviewsData: [],
    reviewsLoading: false,
    reviewsError: null,
  }
});

const WrappedAddReviewForm = withAddReviewFormState(AddReviewForm);


it(`Should AddReviewForm render correctly`, () => {
  const markup = renderer
    .create(
        <Provider store={store}>
          <CardsServiceProvider value={cardsService}>
            <BrowserRouter>
              <Switch>
                <Route path='/'>
                  <WrappedAddReviewForm />
                </Route>
              </Switch>
            </BrowserRouter>
          </CardsServiceProvider>
        </Provider>
    )
    .toJSON();

  expect(markup).toMatchSnapshot();
});
