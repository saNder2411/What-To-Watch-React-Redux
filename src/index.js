import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app.jsx';

const PromoCardDate = {
  title: `The Grand Budapest Hotel`,
  genre: `Drama`,
  date: `2014`,
};

ReactDOM.render(
    <App promoCardData={PromoCardDate}/>,
    document.querySelector(`#root`)
);
