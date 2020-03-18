import {updateFilteredCardList as reducer} from './filtered-card-list.js';
import ActionTypes from '../../action-types/action-types.js';
import {DEFAULT_GENRE, ShowingCardsAmount} from '../../const.js';

const mockGenre = `Drama`;

const initialState = {
  filteredCardList: {
    genre: DEFAULT_GENRE,
    selectedCardId: -1,
    showingCardsAmount: ShowingCardsAmount.ON_START,
  }
};

describe(`Reducer filtered-card-list work correctly`, () => {
  it(`Reducer without additional parameters should return initial state`, () => {
    expect(reducer(void 0, {})).toEqual({
      genre: DEFAULT_GENRE,
      selectedCardId: -1,
      showingCardsAmount: ShowingCardsAmount.ON_START,
    });
  });

  it(`Reducer should update filtered-card-list by request card-list data`, () => {
    expect(reducer(initialState, {type: ActionTypes.FETCH_CARDS_REQUEST}))
      .toEqual({
        genre: DEFAULT_GENRE,
        selectedCardId: -1,
        showingCardsAmount: ShowingCardsAmount.ON_START,
      });
  });

  it(`Reducer should update filtered-card-list by action change genre`, () => {
    expect(reducer(initialState, {type: ActionTypes.CHANGE_GENRE, payload: mockGenre}))
      .toEqual({
        genre: mockGenre,
        selectedCardId: -1,
        showingCardsAmount: ShowingCardsAmount.ON_START,
      });
  });

  it(`Reducer should update filtered-card-list by action change selected cards`, () => {
    expect(reducer(initialState, {type: ActionTypes.CHANGE_SELECTED_CARD, payload: 1}))
      .toEqual({
        genre: DEFAULT_GENRE,
        selectedCardId: 1,
        showingCardsAmount: ShowingCardsAmount.ON_START,
      });
  });

  it(`Reducer should update filtered-card-list by action change showing cards amount on start`, () => {
    expect(reducer(initialState, {type: ActionTypes.CHANGE_SHOWING_CARDS_AMOUNT, payload: ShowingCardsAmount.ON_START}))
      .toEqual({
        genre: DEFAULT_GENRE,
        selectedCardId: -1,
        showingCardsAmount: ShowingCardsAmount.ON_START,
      });
  });

  it(`Reducer should update filtered-card-list by action change showing cards amount by button`, () => {
    expect(reducer(initialState, {type: ActionTypes.CHANGE_SHOWING_CARDS_AMOUNT, payload: void 0}))
      .toEqual({
        genre: DEFAULT_GENRE,
        selectedCardId: -1,
        showingCardsAmount: ShowingCardsAmount.ON_START + ShowingCardsAmount.BY_BUTTON,
      });
  });
});
