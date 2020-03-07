import React from 'react';
import renderer from 'react-test-renderer';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import GenresList from './genres-list.jsx';

const mockStore = configureStore();
const store = mockStore({
  genre: `All Genre`,
  cardsData: [],
  reviews: [],
  newReviews: [],
  promoCardData: {},
});
const mockCardsData = [
  {
    id: 1,
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
    director: `Steven Spielberg`,
    actors: [
      `Judi Dench`, `Robert De Niro`, `Leonardo DiCaprio`, `Morgan Freeman`, `Tom Hanks`,
    ],
    runtime: `1h 58m`,
    genre: `Drama`,
    release: 1989,
    reviewsId: [5, 6, 7, 8],
  },
];
const selectedGenre = `All Genre`;
const onActiveItemClick = () => {};


it(`Should GenresList render correctly`, () => {
  const markup = renderer
    .create(
        <Provider store={store}>
          <BrowserRouter>
            <Switch>
              <Route
                path='/'
                render={() => {
                  return (
                    <GenresList
                      cardsData={mockCardsData}
                      selectedGenre={selectedGenre}
                      onGenresListItemClick={onActiveItemClick}/>
                  );
                }}
              />
            </Switch>
          </BrowserRouter>
        </Provider>
    )
    .toJSON();

  expect(markup).toMatchSnapshot();
});
