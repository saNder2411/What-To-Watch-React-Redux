type Card = {
  id: number;
  title: string;
  posterImage: string;
  previewImage: string;
  backgroundImage: string;
  backgroundColor: string;
  description: string;
  rating: number;
  scoresCount: number;
  director: string;
  starring: Array<string>;
  runtime: number;
  genre: string;
  released: number;
  isFavorite: boolean;
  videoSrc: string;
  previewVideoSrc: string;
}

type Review = {
  id: number;
  user: {
    id: number;
    name: string;
  }
  rating: number;
  comment: string;
  date: string;
}

type UserData = {
  id: number;
  email: string;
  name: string;
  avatarSrc: string;
}

type Error = {
 message: string;
 response?: {
   status: number;
 }
}

type VideoProps = {
  isPlaying: boolean;
  previewImage: string;
  src: string;
  isMuted?: boolean;
  isDelay?: boolean;
  width?: number;
  height?: number;
  className?: string;
  onEnded?: Handle;
  onTimeUpdate?: (secondsValue: number, percentValue: number) => void;
}

type HandleWithEvt = (evt: React.SyntheticEvent) => void;

type Handle = () => void;



enum DataTypes {
  FETCH_CARDS_DATA = `FETCH_CARDS_DATA`,
  FETCH_REVIEWS_DATA = `FETCH_REVIEWS_DATA`,
  FETCH_CHECK_USER_AUTH = `FETCH_CHECK_USER_AUTH`,
  SEND_USER_AUTH_DATA = `SEND_USER_AUTH_DATA`,
  SEND_REVIEW_DATA = `SEND_REVIEW_DATA`,
  FETCH_USER_CARDS_DATA = `FETCH_USER_CARDS_DATA`,
  UPDATE_CARD = `UPDATE_CARD`,
};

enum ShowingCardsAmount {
  ON_START = 8,
  BY_BUTTON = 8,
};

enum Screens {
  MAIN = `MAIN`,
  CARD = `CARD`,
  USER_LIST = `USER_LIST`,
  VIDEO_PLAYER = `VIDEO_PLAYER`,
  SIGN_IN = `SIGN_IN`,
  ADD_REVIEW = `ADD_REVIEW`,
};

enum CardMode {
  OVERVIEW = `overview`,
  DETAILS = `details`,
  REVIEWS = `reviews`,
};

enum AuthError {
  UNAUTHORIZED = 401,
  BAD_DATA_REQUEST = 400,
};

export {
  Card, Review, UserData, VideoProps, Error,
  HandleWithEvt, Handle,
  DataTypes, ShowingCardsAmount, Screens, CardMode, AuthError
};
