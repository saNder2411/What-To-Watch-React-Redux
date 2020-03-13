import ActionTypes from '../action-types/action-types.js';
import {DEFAULT_GENRE, ShowingCardsAmount} from '../const.js';

const extend = (a, b) => Object.assign({}, a, b);

const initialState = {
  promoCardData: {},
  cardsData: [],
  loading: true,
  errorPromo: null,
  errorCards: null,
  genre: DEFAULT_GENRE,
  filteredCards: [],
  showingCardsAmount: ShowingCardsAmount.ON_START,
  reviews: [],
  newReviews: [],
};

const reducer = (state = initialState, action) => {

  switch (action.type) {
    case ActionTypes.FETCH_PROMO_CARD_REQUEST:
      return extend(state,
          {
            promoCardData: {},
            loading: true,
            errorPromo: null,
          });

    case ActionTypes.FETCH_CARDS_REQUEST:
      return extend(state,
          {
            cardsData: [],
            filteredCards: [],
            genre: DEFAULT_GENRE,
            loading: true,
            errorCards: null,
          });

    case ActionTypes.FETCH_PROMO_CARD_SUCCESS:
      return extend(state,
          {
            promoCardData: action.payload,
            loading: false,
            errorPromo: null,
          });

    case ActionTypes.FETCH_CARDS_SUCCESS:
      return extend(state,
          {
            cardsData: action.payload,
            filteredCards: action.payload,
            loading: false,
            errorCards: null
          });

    case ActionTypes.FETCH_PROMO_CARD_FAILURE:
      return extend(state,
          {
            promoCardData: {},
            loading: false,
            errorPromo: action.payload,
          });

    case ActionTypes.FETCH_CARDS_FAILURE:
      return extend(state,
          {
            cardsData: [],
            filteredCards: [],
            loading: false,
            errorCards: action.payload,
          });


    case ActionTypes.CHANGE_GENRE:
      return extend(state, {genre: action.payload});

    case ActionTypes.CHANGE_FILTERED_CARDS:
      return extend(state, {filteredCards: action.payload});

    case ActionTypes.CHANGE_SHOWING_CARDS_AMOUNT:
      return extend(state,
          {
            showingCardsAmount:
              action.payload ? action.payload : state.showingCardsAmount + ShowingCardsAmount.BY_BUTTON,
          });

    default:
      return state;
  }
};

export default reducer;
