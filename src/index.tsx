import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {BrowserRouter} from 'react-router-dom';

import store from './store';
import App from './components/app/app';
import createAPI from './api';
import CardsService from './services/cards-service';
import {CardsServiceProvider} from './components/cards-service-context/cards-service-context';
import ActionCreator from './actions/action-creator';
import FetchActions from './actions/fetch-actions/fetch-actions';
import {DataTypes} from './const';

const onUnauthorized = (error) => store.dispatch(ActionCreator.userDataError(error));
const API = createAPI(onUnauthorized);
const cardsService = new CardsService(API);

store.dispatch(FetchActions.fetchData(cardsService)(DataTypes.FETCH_CHECK_USER_AUTH));

ReactDOM.render(
    <Provider store={store}>
      <CardsServiceProvider value={cardsService}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </CardsServiceProvider>
    </Provider>,
    document.querySelector(`#root`)
);
