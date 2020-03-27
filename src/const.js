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
  FETCH_CARDS_DATA: `FETCH_CARDS_DATA`,
  FETCH_REVIEWS_DATA: `FETCH_REVIEWS_DATA`,
  FETCH_CHECK_USER_AUTH: `FETCH_CHECK_USER_AUTH`,
  SEND_USER_AUTH_DATA: `SEND_USER_AUTH_DATA`,
  SEND_REVIEW_DATA: `SEND_REVIEW_DATA`,
  FETCH_USER_CARDS_DATA: `FETCH_USER_CARDS_DATA`,
  UPDATE_CARD: `UPDATE_CARD`,
};

const Error = {
  UNAUTHORIZED: 401,
  BAD_DATA_REQUEST: 400,
};

const Screens = {
  MAIN: `MAIN`,
  CARD: `CARD`,
  USER_LIST: `USER_LIST`,
  VIDEO_PLAYER: `VIDEO_PLAYER`,
  SIGN_IN: `SIGN_IN`,
  ADD_REVIEW: `ADD_REVIEW`,
};

export {CardMode, DEFAULT_GENRE, ShowingCardsAmount, DataTypes, Error, Screens};
