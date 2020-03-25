import {updatePromoCard as promoCard} from './promo-card/promo-card.js';
import {updateCardList as cardList} from './card-list/card-list.js';
import {updateCardListState as cardListState} from './card-list-state/card-list-state.js';
import {updateReviews as reviews} from './reviews/reviews.js';
import {updateUser as user} from './user/user.js';

const reducer = (state, action) => {

  return {
    user: user(state, action),
    promoCard: promoCard(state, action),
    cardList: cardList(state, action),
    cardListState: cardListState(state, action),
    reviews: reviews(state, action),
  };
};

export default reducer;
