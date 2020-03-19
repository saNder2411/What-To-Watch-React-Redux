import {createStore, applyMiddleware} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
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

const store = createStore(
    reducer,
    composeWithDevTools(
        applyMiddleware(stringMiddleware, thunkMiddleware)
    )
);

const actionCreatorForThunkMiddleware = (action, timeout) => (dispatch) => {
  setTimeout(() => dispatch(action), timeout);
};

store.dispatch(actionCreatorForThunkMiddleware(`DELAYED_ACTION`, 3000));
export default store;
