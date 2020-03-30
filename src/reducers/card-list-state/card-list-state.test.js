import {updateCardListState as reducer} from './card-list-state';
import ActionTypes from '../../action-types/action-types';
import {DEFAULT_GENRE, ShowingCardsAmount} from '../../const';

const mockGenre = `Drama`;

const initialState = {
  cardListState: {
    genre: DEFAULT_GENRE,
    showingCardsAmount: ShowingCardsAmount.ON_START,
  }
};

describe(`Reducer card-list-state work correctly`, () => {
  it(`Reducer without additional parameters should return initial state`, () => {
    expect(reducer(void 0, {})).toEqual({
      genre: DEFAULT_GENRE,
      showingCardsAmount: ShowingCardsAmount.ON_START,
    });
  });

  it(`Reducer should update card-list-state by action set default card-list-state`, () => {
    expect(reducer({genre: `Drama`, showingCardsAmount: 24}, {type: ActionTypes.SET_DEFAULT_CARD_LIST_STATE})).toEqual({
      genre: DEFAULT_GENRE,
      showingCardsAmount: ShowingCardsAmount.ON_START,
    });
  });


  it(`Reducer should update card-list-state by action change genre`, () => {
    expect(reducer(initialState, {type: ActionTypes.CHANGE_GENRE, payload: mockGenre}))
      .toEqual({
        genre: mockGenre,
        showingCardsAmount: ShowingCardsAmount.ON_START,
      });
  });

  it(`Reducer should update card-list-state by action change showing cards amount on start`, () => {
    expect(reducer(initialState, {type: ActionTypes.CHANGE_SHOWING_CARDS_AMOUNT, payload: ShowingCardsAmount.ON_START}))
      .toEqual({
        genre: DEFAULT_GENRE,
        showingCardsAmount: ShowingCardsAmount.ON_START,
      });
  });

  it(`Reducer should update card-list-state by action change showing cards amount by button`, () => {
    expect(reducer(initialState, {type: ActionTypes.CHANGE_SHOWING_CARDS_AMOUNT, payload: void 0}))
      .toEqual({
        genre: DEFAULT_GENRE,
        showingCardsAmount: ShowingCardsAmount.ON_START + ShowingCardsAmount.BY_BUTTON,
      });
  });
});
