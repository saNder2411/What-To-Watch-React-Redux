import {updatePromoCard as promoCard} from './promo-card/promo-card';
import {updateCardList as cardList} from './card-list/card-list';
import {updateCardListState as cardListState} from './card-list-state/card-list-state';
import {updateReviews as reviews} from './reviews/reviews';
import {updateUser as user} from './user/user';
import {updateUserCardList as userCardList} from './user/user-card-list';
import {updateAppState as appState} from './app-state/app-state';

const reducer = (state, action) => {

  return {
    appState: appState(state, action),
    user: user(state, action),
    promoCard: promoCard(state, action),
    cardList: cardList(state, action),
    cardListState: cardListState(state, action),
    reviews: reviews(state, action),
    userCardList: userCardList(state, action),
  };
};

export default reducer;
