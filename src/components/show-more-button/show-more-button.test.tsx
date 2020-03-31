import * as React from 'react';
import * as renderer from 'react-test-renderer';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import ShowMoreButton from './show-more-button';
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
  isFavorite: true,
};

const mockCards = [mockCardData, mockCardData, mockCardData, mockCardData];


describe(`Render ShowMoreButton`, () => {
  it(`Should ShowMoreButton render correctly`, () => {
    const store = mockStore({
      appState: {
        screen: `MAIN`,
        selectedCardId: 1,
      },
      cardList: {
        cardsData: mockCards,
        cardsLoading: false,
        cardsError: null,
        updatedCardLoading: false,
        updatedCardError: null,
      },
      cardListState: {
        genre: `All genres`,
        showingCardsAmount: 2,
      },
    });
    const markup = renderer
      .create(
          <Provider store={store}>
            <BrowserRouter>
              <Switch>
                <Route path='/'>
                  <ShowMoreButton />
                </Route>
              </Switch>
            </BrowserRouter>
          </Provider>
      )
      .toJSON();

    expect(markup).toMatchSnapshot();
  });

  it(`Should ShowMoreButton render correctly when there are no cards to render`, () => {
    const store = mockStore({
      appState: {
        screen: `MAIN`,
        selectedCardId: 1,
      },
      cardList: {
        cardsData: mockCards,
        cardsLoading: false,
        cardsError: null,
        updatedCardLoading: false,
        updatedCardError: null,
      },
      cardListState: {
        genre: `All genres`,
        showingCardsAmount: 8,
      },
    });
    const markup = renderer
      .create(
          <Provider store={store}>
            <BrowserRouter>
              <Switch>
                <Route path='/'>
                  <ShowMoreButton />
                </Route>
              </Switch>
            </BrowserRouter>
          </Provider>
      )
      .toJSON();

    expect(markup).toMatchSnapshot();
  });
});

