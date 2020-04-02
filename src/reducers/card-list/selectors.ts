const getCardsData = ({cardList: {cardsData}}) => cardsData;

const getCardsLoading = ({cardList: {cardsLoading}}) => cardsLoading;

const getCardsError = ({cardList: {cardsError}}) => cardsError;

const getUpdatedCardLoading = ({cardList: {updatedCardLoading}}) => updatedCardLoading;

const getUpdatedCardError = ({cardList: {updatedCardError}}) => updatedCardError;

export {getCardsData, getCardsLoading, getCardsError, getUpdatedCardLoading, getUpdatedCardError};
