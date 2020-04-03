import * as React from 'react';
import * as renderer from 'react-test-renderer';
import thunk from 'redux-thunk';
import createAPI from '../../api';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import CardsService from '../../services/cards-service';
import {CardsServiceProvider} from '../cards-service-context/cards-service-context';

import MainContent from './main-content';
import GenreList from '../genre-list/genre-list';
import PreviewCardList from '../preview-card-list/preview-card-list';
import ShowMoreButton from '../show-more-button/show-more-button';
import Footer from '../footer/footer';
import Logo from '../logo/logo';

import withPreviewCardListState from '../../hocs/with-preview-card-list-state/with-preview-card-list-state';
import withActiveItem from '../../hocs/with-active-item/with-active-item';
import compose from '../../hocs/compose/compose';
import {noop} from '../../utils/utils';


const API = createAPI(noop);
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
  isFavorite: true,
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
    isFavorite: true,
    genre: `Drama`,
    released: 1989,
  },
];
const store = mockStore({
  appState: {
    screen: `MAIN`,
    selectedCardId: 1,
  },
  user: {
    isAuthorized: false,
    userData: {},
    userDataLoading: true,
    userDataError: null,
  },
  userCardList: {
    userCardsData: [],
    userCardsLoading: false,
    userCardsError: null,
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
    updatedCardLoading: false,
    updatedCardError: null,
  },
  cardListState: {
    genre: `All genre`,
    showingCardsAmount: 8,
  },
  reviews: {
    reviewsData: [],
    reviewsLoading: false,
    isReviewAdded: false,
    reviewsError: null,
  }
});


const WrappedGenreList = withActiveItem(GenreList);
const WrappedPreviewCardList = compose(withActiveItem, withPreviewCardListState)(PreviewCardList);


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
