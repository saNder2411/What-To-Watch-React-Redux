import Common from '../utils/common.js';

const TextReviews = [
  `Discerning travellers and Wes Anderson fans will luxuriate in the glorious Mittel-European kitsch of one of the director's funniest and most exquisitely designed movies in years.`,
  `Anderson's films are too precious for some, but for those of us willing to lose ourselves in them, they're a delight. "The Grand Budapest Hotel" is no different, except that he has added a hint of gravitas to the mix, improving the recipe.`,
  `I didn't find it amusing, and while I can appreciate the creativity, it's an hour and 40 minutes I wish I could take back.`,
  `The mannered, madcap proceedings are often delightful, occasionally silly, and here and there, gruesome and/or heartbreaking.`,
  `It is certainly a magical and childlike way of storytelling, even if the content is a little more adult.`,
  `It is certainly a magical and childlike way of storytelling, even if the content is a little more adult.`,
];

const AuthorNames = [
  `Kate Muir`,
  `Bill Goodykoontz`,
  `Amanda Greever`,
  `Matthew Lickona`,
  `Paula Fleri-Soler`,
  `Paula Fleri-Soler`,
];

const AMOUNT_REVIEWS = 40;

const generateMockReview = (id) => {
  return {
    id,
    text: TextReviews[Common.getRandomNumberFromPeriod(TextReviews.length)],
    author: AuthorNames[Common.getRandomNumberFromPeriod(AuthorNames.length)],
    rating: Common.getRandomRating(),
    date: Common.getRandomDate(),
  };
};

const generateMockReviews = (amount) => new Array(amount)
  .fill(``)
  .map((review, i) => {
    review = generateMockReview(i);
    return review;
  });

export default generateMockReviews(AMOUNT_REVIEWS);
