import React from 'react';
import renderer from 'react-test-renderer';
import thunk from 'redux-thunk';
import createAPI from '../../api';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import CardsService from '../../services/cards-service.js';
import {CardsServiceProvider} from '../cards-service-context/cards-service-context.js';

import MainContent from './main-content.jsx';
import GenreList from '../genre-list/genre-list.jsx';
import PreviewCardList from '../preview-card-list/preview-card-list.jsx';
import ShowMoreButton from '../show-more-button/show-more-button.jsx';
import Footer from '../footer/footer.jsx';
import Logo from '../logo/logo.jsx';

import withPreviewCardListState from '../../hocs/with-preview-card-list-state/with-preview-card-list-state.jsx';
import withFetchData from '../../hocs/with-fetch-data/with-fetch-data.jsx';
import withActiveItem from '../../hocs/with-active-item/with-active-item.jsx';
import compose from '../../hocs/compose/compose.js';

import {DataTypes, ComponentTypes} from '../../const.js';


const API = createAPI(() => {});
const cardsService = new CardsService(API);
const mockStore = configureStore([thunk]);

const mockPromoCardData = {
  id: 1,
  backgroundImage: `bg-the-grand-budapest-hotel`,
  posterImage: `the-grand-budapest-hotel-poster`,
  previewImage: `img/bohemian-rhapsody.jpg`,
  title: `Bohemian Rhapsody`,
  description: `In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave's friend and protege.`,
  rating: 9,
  scoresCount: 100,
  previewVideoSrc: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
  videoSrc: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
  director: `Steven Spielberg`,
  starring: [
    `Judi Dench`, `Robert De Niro`, `Leonardo DiCaprio`, `Morgan Freeman`, `Tom Hanks`,
  ],
  runtime: 98,
  genre: `Drama`,
  released: 1989,
};

const mockCardsData = [
  {
    id: 1,
    backgroundImage: `bg-the-grand-budapest-hotel`,
    posterImage: `the-grand-budapest-hotel-poster`,
    previewImage: `img/bohemian-rhapsody.jpg`,
    title: `Bohemian Rhapsody`,
    description: `In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave's friend and protege.`,
    rating: 9,
    scoresCount: 100,
    previewVideoSrc: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
    videoSrc: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
    director: `Steven Spielberg`,
    starring: [
      `Judi Dench`, `Robert De Niro`, `Leonardo DiCaprio`, `Morgan Freeman`, `Tom Hanks`,
    ],
    runtime: 98,
    genre: `Drama`,
    released: 1989,
  },
];
const store = mockStore({
  user: {
    userData: {},
    isAuthorized: false,
    authLoading: false,
    authError: null,
  },
  promoCard: {
    promoCardData: mockPromoCardData,
    promoLoading: false,
    promoError: null,
  },
  cardList: {
    cardsData: mockCardsData,
    cardsLoading: false,
    cardsError: null,
  },
  cardListState: {
    genre: `All genre`,
    selectedCardId: -1,
    showingCardsAmount: 8,
  },
  reviews: {
    reviewsData: [],
    reviewsLoading: false,
    reviewsError: null,
  }
});


const WrappedPreviewCardList = compose(
    withActiveItem(ComponentTypes.PREVIEW_CARDS_LIST),
    withPreviewCardListState)(PreviewCardList);

const WrappedGenreList = compose(
    withFetchData(DataTypes.FETCH_CARDS_DATA),
    withActiveItem(ComponentTypes.GENRES_LIST))(GenreList);


it(`Should MainContent render correctly`, () => {
  const markup = renderer.create(
      <Provider store={store}>
        <CardsServiceProvider value={cardsService}>
          <BrowserRouter>
            <Switch>
              <Route
                path='/'
                exact
              >
                <MainContent>
                  <WrappedGenreList/>
                  <WrappedPreviewCardList />
                  <ShowMoreButton />
                  <Footer>
                    <Logo isFooterLogo/>
                  </Footer>
                </MainContent>
              </Route>
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
