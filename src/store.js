import {createStore, compose, applyMiddleware} from 'redux';
import reducer from './reducers/reducer.js';
import thunkMiddleware from 'redux-thunk';

const stringMiddleware = () => (dispatch) => (action) => {
  if (typeof action === `string`) {
    return dispatch({
      type: action,
    });
  }

  return dispatch(action);
};

const store = createStore(reducer, compose(
    applyMiddleware(stringMiddleware, thunkMiddleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : (f) => f));

const actionCreatorForThunkMiddleware = (action, timeout) => (dispatch) => {
  setTimeout(() => dispatch(action), timeout);
};

store.dispatch(actionCreatorForThunkMiddleware({type: `DELAYED_ACTION`}, 3000));
export default store;
