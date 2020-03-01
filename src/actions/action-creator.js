import ActionTypes from '../action-types/action-types.js';

const ActionCreator = {
  cardsLoaded: (newCards) => {
    return {type: ActionTypes.CARDS_LOADED, payload: newCards};
  },
};

export default ActionCreator;
