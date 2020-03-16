import mockCards from '../mocks/mock-cards';
import mockReviews from '../mocks/mock-reviews.js';
import mockPromoCard from '../mocks/mock-promo-card.js';

export default class CardsService {
  constructor(API) {
    this._API = API;
    this.mockPromoCardData = mockPromoCard;
    this.mockCardsData = mockCards;
    this.mockReviewsData = mockReviews;
  }

  getPromoCardData() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (Math.random() > 0.9) {
          reject(new Error(`Error! Something bad happened!`));
        } else {
          resolve(this.mockPromoCardData);
        }
      }, 700);
    });
  }

  _parseCard(data) {
    return {
      id: data[`id`],
      title: data[`name`],
      posterImage: data[`poster_image`],
      previewImage: data[`preview_image`],
      backgroundImage: data[`background_image`],
      backgroundColor: data[`background_color`],
      description: data[`description`],
      rating: data[`rating`],
      scoresCount: data[`scores_count`],
      director: data[`director`],
      starring: data[`starring`],
      runtime: data[`run_time`],
      genre: data[`genre`],
      released: data[`released`],
      isFavorite: data[`is_favorite`],
      videoSrc: data[`video_link`],
      previewVideoSrc: data[`preview_video_link`],
    };
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

  getPromoCard() {
    return this._API.get(`/films/promo`)
    .then((res) => this._parseCard(res.data));
  }

  getCardList() {
    return this._API.get(`/films`)
    .then((res) => res.data.map(this._parseCard));
  }
}
