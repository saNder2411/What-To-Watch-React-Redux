import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import store from './store.js';
import App from './components/app/app.jsx';
import CardsService from './services/cards-service.js';
import {CardsServiceProvider} from './components/cards-service-context/cards-service-context.js';
import mockCards from './mocks/mock-cards.js';

const cardsService = new CardsService();

const PromoCardData = {
  title: `The Grand Budapest Hotel`,
  genre: `Drama`,
  date: `2014`,
};

ReactDOM.render(
    <Provider store={store}>
      <CardsServiceProvider value={cardsService}>
        <App promoCardData={PromoCardData} cardsData={mockCards} />
      </CardsServiceProvider>
    </Provider>,
    document.querySelector(`#root`)
);
