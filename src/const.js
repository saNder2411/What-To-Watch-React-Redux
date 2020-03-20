const CardMode = {
  OVERVIEW: `overview`,
  DETAILS: `details`,
  REVIEWS: `reviews`
};

const DEFAULT_GENRE = `All genres`;

const ShowingCardsAmount = {
  ON_START: 8,
  BY_BUTTON: 8,
};

const DataTypes = {
  PROMO_DATA: `PROMO_DATA`,
  CARDS_DATA: `CARDS_DATA`,
  REVIEWS_DATA: `REVIEWS_DATA`,
};

const ComponentTypes = {
  PREVIEW_CARDS_LIST: `PREVIEW_CARDS_LIST`,
  GENRES_LIST: `GENRES_LIST`,
};

const Error = {
  UNAUTHORIZED: 401,
  BAD_DATA_REQUEST: 400,
};

const AuthStatus = {
  AUTH: `AUTH`,
  NO_AUTH: `NO_AUTH`,
};

const AuthActionTypes = {
  CHECK_USER_AUTH: `CHECK_USER_AUTH`,
  USER_AUTH: `USER_AUTH`,
};

export {CardMode, DEFAULT_GENRE, ShowingCardsAmount, DataTypes,
  ComponentTypes, Error, AuthStatus, AuthActionTypes};
