import React from 'react';
import renderer from 'react-test-renderer';
import CardTabs from './card-tabs';
import CardOverview from '../../components/card-overview/card-overview';
import CardDetails from '../../components/card-details/card-details';
import CardReviews from '../../components/card-reviews/card-reviews';
import withCardTabsState from '../../hocs/with-card-tabs-state/with-card-tabs-state';
import withFetchData from '../../hocs/with-fetch-data/with-fetch-data';
import {DataTypes} from '../../const';

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

it(`Should CardOverview render correctly`, () => {
  const markup = renderer
    .create(
        <WrappedCardTabs >
          <CardOverview {...selectedCard} />
          <CardDetails {...selectedCard} />
          <WrappedCardReviews />
        </WrappedCardTabs>
    )
    .toJSON();

  expect(markup).toMatchSnapshot();
});
