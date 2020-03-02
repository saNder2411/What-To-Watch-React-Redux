import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import store from './store.js';
import {BrowserRouter} from 'react-router-dom';
import App from './components/app/app.jsx';
import CardsService from './services/cards-service.js';
import {CardsServiceProvider} from './components/cards-service-context/cards-service-context.js';

const cardsService = new CardsService();

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
