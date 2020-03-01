import mockCards from '../mocks/mock-cards';
import mockReviews from '../mocks/mock-reviews.js';
import mockPromoCard from '../mocks/mock-promo-card.js';

export default class CardsService {
  getCards() {
    return mockCards;
  }

  getReviews() {
    return mockReviews;
  }

  getPromoCard() {
    return mockPromoCard;
  }
}
