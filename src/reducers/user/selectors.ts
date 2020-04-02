const getUserData = ({user: {userData}}) => userData;

const getUserAuthStatus = ({user: {isAuthorized}}) => isAuthorized;

const getUserDataLoading = ({user: {userDataLoading}}) => userDataLoading;

const getUserDataError = ({user: {userDataError}}) => userDataError;

const getUserCardsData = ({userCardList: {userCardsData}}) => userCardsData;

const getUserCardsLoading = ({userCardList: {userCardsLoading}}) => userCardsLoading;

const getUserCardsError = ({userCardList: {userCardsError}}) => userCardsError;

export {getUserData, getUserAuthStatus, getUserDataLoading, getUserDataError,
  getUserCardsData, getUserCardsLoading, getUserCardsError};
