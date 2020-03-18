import React from 'react';
import renderer from 'react-test-renderer';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import ShowMoreButton from './show-more-button.jsx';
import thunk from 'redux-thunk';

const mockStore = configureStore([thunk]);

const mockCardData = {
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

const filteredCards = [mockCardData, mockCardData, mockCardData];

const changeShowingCardsAmount = () => {};


describe(`Render ShowMoreButton`, () => {
  it(`Should ShowMoreButton render correctly when there are no cards to render`, () => {
    const store = mockStore({
      promoCard: {
        promoCardData: [],
        promoLoading: false,
        promoError: null,
      },
      cardList: {
        cardsData: [],
        cardsLoading: false,
        cardsError: null,
      },
      filteredCardList: {
        genre: `All genre`,
        selectedCardId: -1,
        showingCardsAmount: 1,
      },
      reviews: {
        reviewsData: [],
        reviewsLoading: false,
        reviewsError: null,
      }
    });
    const markup = renderer
      .create(
          <Provider store={store}>
            <BrowserRouter>
              <Switch>
                <Route
                  path='/'
                  render={() => {
                    return <ShowMoreButton changeShowingCardsAmount={changeShowingCardsAmount}/>;
                  }}
                />
              </Switch>
            </BrowserRouter>
          </Provider>
      )
      .toJSON();

    expect(markup).toMatchSnapshot();
  });

  it(`Should ShowMoreButton render correctly`, () => {
    const store = mockStore({
      promoCard: {
        promoCardData: {},
        promoLoading: false,
        promoError: null,
      },
      cardList: {
        cardsData: [mockCardData, mockCardData, mockCardData],
        cardsLoading: false,
        cardsError: null,
      },
      filteredCardList: {
        genre: `All genre`,
        selectedCardId: -1,
        showingCardsAmount: 1,
      },
      reviews: {
        reviewsData: [],
        reviewsLoading: false,
        reviewsError: null,
      }
    });
    const markup = renderer
      .create(
          <Provider store={store}>
            <BrowserRouter>
              <Switch>
                <Route
                  path='/'
                  render={() => <ShowMoreButton filteredCards={filteredCards} changeShowingCardsAmount={changeShowingCardsAmount}/>}
                />
              </Switch>
            </BrowserRouter>
          </Provider>
      )
      .toJSON();

    expect(markup).toMatchSnapshot();
  });
});

