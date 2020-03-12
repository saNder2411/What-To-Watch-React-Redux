import mockCards from '../mocks/mock-cards';
import mockReviews from '../mocks/mock-reviews.js';
import mockPromoCard from '../mocks/mock-promo-card.js';

export default class CardsService {
  constructor() {
    this.mockPromoCardData = mockPromoCard;
    this.mockCardsData = mockCards;
    this.mockReviewsData = mockReviews;
  }

  getPromoCardData() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (Math.random() > 0.8) {
          reject(new Error(`Error! Something bad happened!`));
        } else {
          resolve(this.mockPromoCardData);
        }
      }, 700);
    });
  }

  getCards() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (Math.random() > 0.8) {
          reject(new Error(`Error! Something bad happened!`));
        } else {
          resolve(this.mockCardsData);
        }
      }, 700);
    });
  }

  getReviews() {
    return mockReviews;
  }
}
