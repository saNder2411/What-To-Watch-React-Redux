import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import store from './store.js';
import App from './components/app/app.jsx';
import createAPI from './api';
import CardsService from './services/cards-service.js';
import {CardsServiceProvider} from './components/cards-service-context/cards-service-context.js';
import ActionCreator from './actions/action-creator.js';
import AuthActions from './actions/auth-actions/auth-actions.js';
import {AuthActionTypes} from './const.js';

const onUnauthorized = (error) => store.dispatch(ActionCreator.authorizationDataError(error));
const API = createAPI(onUnauthorized);
const cardsService = new CardsService(API);

store.dispatch(AuthActions.authActionCreator(cardsService)(AuthActionTypes.CHECK_USER_AUTH));

ReactDOM.render(
    <Provider store={store}>
      <CardsServiceProvider value={cardsService}>
        <App />
      </CardsServiceProvider>
    </Provider>,
    document.querySelector(`#root`)
);
