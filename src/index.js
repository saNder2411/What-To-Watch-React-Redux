import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app.jsx';
import mockCards from './mocks/mock-cards.js';

const PromoCardData = {
  title: `The Grand Budapest Hotel`,
  genre: `Drama`,
  date: `2014`,
};

ReactDOM.render(
    <App promoCardData={PromoCardData} cardsData={mockCards} />,
    document.querySelector(`#root`)
);
