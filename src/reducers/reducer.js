import {updatePromoCard as promoCard} from './promo-card/promo-card.js';
import {updateCardList as cardList} from './card-list/card-list.js';
import {updateFilteredCardList as filteredCardList} from './filtered-card-list/filtered-card-list.js';
import {updateReviews as reviews} from './reviews/reviews.js';
import {updateUser as user} from './user/user.js';

const reducer = (state, action) => {
  return {
    promoCard: promoCard(state, action),
    cardList: cardList(state, action),
    filteredCardList: filteredCardList(state, action),
    reviews: reviews(state, action),
    user: user(state, action),
  };
};

export default reducer;
