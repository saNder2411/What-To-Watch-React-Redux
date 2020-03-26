import React from 'react';
import renderer from 'react-test-renderer';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import thunk from 'redux-thunk';

import CardScreenTop from './card-screen-top.jsx';
import CardScreenHeader from '../card-screen-header/card-screen-header.jsx';
import Header from '../header/header.jsx';
import Logo from '../logo/logo.jsx';
import UserBlock from '../user-block/user-block.jsx';
import HeaderCardDesc from '../header-card-desc/header-card-desc.jsx';
import HeaderButtons from '../header-buttons/header-buttons.jsx';
import CardOverview from '../../components/card-overview/card-overview.jsx';
import CardDetails from '../../components/card-details/card-details.jsx';
import CardReviews from '../../components/card-reviews/card-reviews.jsx';
import Poster from '../poster/poster.jsx';
import CardTabs from '../card-tabs/card-tabs.jsx';

import withCardTabsState from '../../hocs/with-card-tabs-state/with-card-tabs-state.jsx';
import withFetchData from '../../hocs/with-fetch-data/with-fetch-data.jsx';

import {DataTypes} from '../../const.js';


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
  },
];
const store = mockStore({
  user: {
    userData: {},
    isAuthorized: false,
    userDataLoading: false,
    userDataError: null,
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
  },
  cardListState: {
    genre: `Drama`,
    selectedCardId: 1,
    showingCardsAmount: 8,
  },
  reviews: {
    reviewsData: [],
    reviewsLoading: false,
    reviewsError: null,
  }
});

const selectedCard = {
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

const WrappedCardTabs = withCardTabsState(CardTabs);
const WrappedCardReviews = withFetchData(DataTypes.FETCH_REVIEWS_DATA)(CardReviews);

const title = `Bohemian Rhapsody`;
const genre = `Drama`;
const released = 1989;
const posterImage = `img/bohemian-rhapsody.jpg`;
const backgroundImage = `bg-the-grand-budapest-hotel`;

it(`Should CardScreenTop render correctly`, () => {
  const markup = renderer
    .create(
        <Provider store={store}>
          <BrowserRouter>
            <Switch>
              <Route
                path='/'
              >
                <CardScreenTop>
                  <CardScreenHeader >
                    <Header title={title} backgroundImage={backgroundImage}>
                      <Logo />
                      <UserBlock />
                    </Header>
                    <HeaderCardDesc title={title} genre={genre} released={released} >
                      <HeaderButtons selectedCardId={`1`}/>
                    </HeaderCardDesc>
                  </CardScreenHeader>
                  <Poster posterImage={posterImage} title={title}/>
                  <WrappedCardTabs >
                    <CardOverview {...selectedCard} />
                    <CardDetails {...selectedCard} />
                    <WrappedCardReviews selectedCardId={`1`} />
                  </WrappedCardTabs>
                </CardScreenTop>
              </Route>
            </Switch>
          </BrowserRouter>
        </Provider>
    )
    .toJSON();

  expect(markup).toMatchSnapshot();
});
