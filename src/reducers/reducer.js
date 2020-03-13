import updatePromoCard from './promo-card-reducer.js';
import updateCardList from './card-list-reducer.js';
import {DEFAULT_GENRE, ShowingCardsAmount} from '../const.js';

export const extend = (a, ...b) => Object.assign({}, a, ...b);

const initialState = {
  promoCard: {
    promoCardData: {},
    promoLoading: true,
    promoError: null,
  },
  cardList: {
    cardsData: [],
    cardsLoading: true,
    cardsError: null,
    filteredCards: [],
    genre: DEFAULT_GENRE,
    showingCardsAmount: ShowingCardsAmount.ON_START,
  },
  favoriteCardList: {
    favoriteCardsData: [],
    favoriteLoading: true,
    errorFavoriteCards: null,
    modifiedFavoriteCard: {},
  },
  reviewList: {
    reviews: [],
    reviewsLoading: true,
    errorReviews: null,
    newReview: {},
  }
};

const reducer = (state = initialState, action) => {

  return extend(state, {
    promoCard: updatePromoCard(state, action),
    cardList: updateCardList(state, action),
  });
};

export default reducer;
