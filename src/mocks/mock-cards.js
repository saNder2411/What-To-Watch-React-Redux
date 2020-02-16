import Common from '../utils/common.js';
import MockReviews from './mock-reviews.js';

const Titles = [
  `Fantastic Beasts: The Crimes of Grindelwald`,
  `Bohemian Rhapsody`,
  `Macbeth`,
  `Aviator`,
  `We need to talk about Kevin`,
  `What We Do in the Shadows`,
  `Revenant`,
  `Johnny English`,
  `Shutter Island`,
  `Pulp Fiction`,
  `No Country for Old Men`,
  `Snatch`,
  `Moonrise Kingdom`,
  `Seven Years in Tibet`,
  `Midnight Special`,
  `War of the Worlds`,
  `Dardjeeling Limited`,
  `Orlando`,
  `Mindhunter`,
  `Midnight Special`,
];

const Genres = [
  `Animation`, `Biography`, `Comedy`, `Drama`, `Fantasy`,
  `History`, `Sci-Fi`, `Sport`, `Thriller`, `War`, `TV Series`
];

const Descriptions = [
  `In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave's friend and protege.`,
  `Gustave prides himself on providing first-class service to the hotel's guests, including satisfying the sexual needs of the many elderly women who stay there. When one of Gustave's lovers dies mysteriously, Gustave finds himself the recipient of a priceless painting and the chief suspect in her murder.`
];

const Directors = [
  `Steven Spielberg`, `Martin Scorsese`, `Alfred Hitchcock`, `Stanley Kubrick`, `Quentin Tarantino`,
  `Orson Welles`, `Francis Ford Coppola`, `Ridley Scott`, `Akira Kurosawa`, `David Lynch`
];

const Actors = [
  `Judi Dench`, `Robert De Niro`, `Leonardo DiCaprio`, `Morgan Freeman`, `Tom Hanks`, `Anthony Hopkins`,
  `Samuel L. Jackson`, `Frances McDormand`, `Liam Neeson`, `Denzel Washington`, `Will Smith`
];

const MAX_AMOUNT_REVIEWS = 7;

const getPreviewPosterSrcValue = (title) => {
  return `img/${
    title
    .slice()
    .split(` `)
    .map((str) => str[str.length - 1] === `:` ? str.slice(0, -1) : str)
    .join(`-`)
    .toLowerCase()
  }.jpg`;
};

const getRandomRuntime = () => {
  const minutes = Common.getRandomNumberFromPeriod(60);
  const hours = Common.getRandomNumberFromPeriod(3);

  if (hours) {
    return `${hours}h ${(minutes < 10) ? `0${minutes}` : minutes}m`;
  }

  return `${(minutes < 10) ? `0${minutes}` : minutes}m`;
};

const generateMockCard = (title, id) => {
  return {
    id,
    overviewData: {
      promoPoster: `bg-the-grand-budapest-hotel`,
      poster: `the-grand-budapest-hotel-poster`,
      previewPoster: getPreviewPosterSrcValue(title),
      title,
      descriptions: Descriptions,
      rating: Common.getRandomRating(),
      amountVoice: Common.getRandomNumberFromPeriod(200),
    },
    detailsData: {
      director: Directors[Common.getRandomNumberFromPeriod(Directors.length)],
      actors: Actors.filter(() => Math.random() > 0.5),
      runtime: getRandomRuntime(),
      genre: Genres[Common.getRandomNumberFromPeriod(Genres.length)],
      release: Common.getRandomDate(),
    },
    reviewsId: MockReviews
      .slice()
      .splice(Common.getRandomNumberFromPeriod(MockReviews.length - MAX_AMOUNT_REVIEWS), Common.getRandomNumberFromPeriod(MAX_AMOUNT_REVIEWS))
      .map((review) => review.id),
  };
};

const generateMockCards = (titles) => titles.map((title, i) => generateMockCard(title, i));

export default generateMockCards(Titles);
