import {updatePromoCard as promoCard} from './promo-card/promo-card.js';
import {updateCardList as cardList} from './card-list/card-list.js';
import {updateFilteredCardList as filteredCardList} from './filtered-card-list/filtered-card-list.js';
import {updateReviews as reviews} from './reviews/reviews.js';

const reducer = (state, action) => {
  return {
    promoCard: promoCard(state, action),
    cardList: cardList(state, action),
    filteredCardList: filteredCardList(state, action),
    reviews: reviews(state, action),
  };
};

export default reducer;
