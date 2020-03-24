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

export default store;
