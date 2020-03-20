import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import store from './store.js';
import App from './components/app/app.jsx';
import createAPI from './api';
import CardsService from './services/cards-service.js';
import {CardsServiceProvider} from './components/cards-service-context/cards-service-context.js';
import ActionCreator from './actions/action-creator.js';

const onUnauthorized = (error) => store.dispatch(ActionCreator.authorizationStatusError(error));
const API = createAPI(onUnauthorized);
const cardsService = new CardsService(API);

ReactDOM.render(
    <Provider store={store}>
      <CardsServiceProvider value={cardsService}>
        <App />
      </CardsServiceProvider>
    </Provider>,
    document.querySelector(`#root`)
);
