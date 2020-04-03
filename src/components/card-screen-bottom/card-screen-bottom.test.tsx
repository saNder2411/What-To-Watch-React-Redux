import * as React from 'react';
import * as renderer from 'react-test-renderer';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import CardScreenBottom from './card-screen-bottom';
import Logo from '../logo/logo';
import PreviewCardList from '../preview-card-list/preview-card-list';
import Footer from '../footer/footer';

import withPreviewCardListState from '../../hocs/with-preview-card-list-state/with-preview-card-list-state';
import withActiveItem from '../../hocs/with-active-item/with-active-item';
import compose from '../../hocs/compose/compose';


const mockStore = configureStore([thunk]);
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
    isFavorite: true,
  },
];
const store = mockStore({
  appState: {
    screen: `CARD`,
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
    promoCardData: {},
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
    genre: `Drama`,
    showingCardsAmount: 8,
  },
  reviews: {
    reviewsData: [],
    reviewsLoading: false,
    isReviewAdded: false,
    reviewsError: null,
  }
});

const WrappedPreviewCardList = compose(withActiveItem, withPreviewCardListState)(PreviewCardList);

it(`Should CardScreenBottom render correctly`, () => {
  const markup = renderer
    .create(
        <Provider store={store}>
          <BrowserRouter>
            <Switch>
              <Route
                path='/'
              >
                <CardScreenBottom>
                  <WrappedPreviewCardList />
                  <Footer>
                    <Logo isFooterLogo/>
                  </Footer>
                </CardScreenBottom>
              </Route>
            </Switch>
          </BrowserRouter>
        </Provider>
    )
    .toJSON();

  expect(markup).toMatchSnapshot();
});
