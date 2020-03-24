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
  FETCH_PROMO_DATA: `FETCH_PROMO_DATA`,
  FETCH_CARDS_DATA: `FETCH_CARDS_DATA`,
  FETCH_REVIEWS_DATA: `FETCH_REVIEWS_DATA`,
  FETCH_CHECK_USER_AUTH: `FETCH_CHECK_USER_AUTH`,
  SEND_USER_AUTH_DATA: `SEND_USER_AUTH_DATA`,
  SEND_REVIEW_DATA: `SEND_REVIEW_DATA`,
};

const Error = {
  UNAUTHORIZED: 401,
  BAD_DATA_REQUEST: 400,
};

const AuthStatus = {
  AUTH: `AUTH`,
  NO_AUTH: `NO_AUTH`,
};

export {CardMode, DEFAULT_GENRE, ShowingCardsAmount, DataTypes, Error, AuthStatus};
