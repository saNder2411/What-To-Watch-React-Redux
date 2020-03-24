import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import store from './store.js';
import App from './components/app/app.jsx';
import createAPI from './api';
import CardsService from './services/cards-service.js';
import {CardsServiceProvider} from './components/cards-service-context/cards-service-context.js';
import ActionCreator from './actions/action-creator.js';
import FetchActions from './actions/fetch-actions/fetch-actions.js';
import {DataTypes} from './const.js';

const onUnauthorized = (error) => store.dispatch(ActionCreator.authDataError(error));
const API = createAPI(onUnauthorized);
const cardsService = new CardsService(API);

store.dispatch(FetchActions.fetchData(cardsService)(DataTypes.FETCH_CHECK_USER_AUTH));

ReactDOM.render(
    <Provider store={store}>
      <CardsServiceProvider value={cardsService}>
        <App />
      </CardsServiceProvider>
    </Provider>,
    document.querySelector(`#root`)
);
