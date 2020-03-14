import {createStore, applyMiddleware} from 'redux';
import reducer from './reducers/reducer.js';
import thunkMiddleware from 'redux-thunk';

const logMiddleware = (store) => (dispatch) => (action) => {
  console.log(action.type, store.getState());
  return dispatch(action);
};

const stringMiddleware = () => (dispatch) => (action) => {
  if (typeof action === `string`) {
    return dispatch({
      type: action,
    });
  }

  return dispatch(action);
};

const store = createStore(reducer, applyMiddleware(
    thunkMiddleware, stringMiddleware, logMiddleware));

const actionCreatorForThunkMiddleware = (action, timeout) => (dispatch) => {
  setTimeout(() => dispatch(action), timeout);
};

store.dispatch(actionCreatorForThunkMiddleware({type: `DELAYED_ACTION`}, 3000));
export default store;
