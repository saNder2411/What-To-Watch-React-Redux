import React from 'react';
import renderer from 'react-test-renderer';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Main from './main.jsx';
import CardsService from '../../services/cards-service.js';
import {CardsServiceProvider} from '../cards-service-context/cards-service-context.js';

const cardsService = new CardsService();

const mockPromoCardData = {
  title: `The Grand Budapest Hotel`,
  genre: `Drama`,
  date: 2014,
  poster: `the-grand-budapest-hotel-poster`,
};

const mockCardsData = [
  {
    id: 1,
    overviewData: {
      promoPoster: `bg-the-grand-budapest-hotel`,
      poster: `the-grand-budapest-hotel-poster`,
      previewPoster: `img/bohemian-rhapsody.jpg`,
      title: `Bohemian Rhapsody`,
      descriptions: [
        `In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave's friend and protege.`,
        `Gustave prides himself on providing first-class service to the hotel's guests, including satisfying the sexual needs of the many elderly women who stay there. When one of Gustave's lovers dies mysteriously, Gustave finds himself the recipient of a priceless painting and the chief suspect in her murder.`
      ],
      rating: `10`,
      amountVoice: 100,
      previewVideoSrc: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
    },
    detailsData: {
      director: `Steven Spielberg`,
      actors: [
        `Judi Dench`, `Robert De Niro`, `Leonardo DiCaprio`, `Morgan Freeman`, `Tom Hanks`,
      ],
      runtime: `1h 58m`,
      genre: `Drama`,
      release: 1989,
    },
    reviewsId: [5, 6, 7, 8],
  },
];

const mockStore = configureStore();

const store = mockStore({
  genre: `All Genre`,
  cardsData: mockCardsData,
  filteredCardsLength: 20,
  showingCardsAmount: 8,
  reviews: [],
  newReviews: [],
  promoCardData: mockPromoCardData,
});


it(`Should Main render correctly`, () => {
  const markup = renderer.create(
      <Provider store={store}>
        <CardsServiceProvider value={cardsService}>
          <BrowserRouter>
            <Switch>
              <Route
                path='/'
                exact
                render={() => <Main />}
              />
            </Switch>
          </BrowserRouter>
        </CardsServiceProvider>
      </Provider>,
      {
        createNodeMock: () => {
          return {};
        }
      }
  )
  .toJSON();

  expect(markup).toMatchSnapshot();
});
