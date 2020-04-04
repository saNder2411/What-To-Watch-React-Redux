export type Card = {
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

export type PreviewCardData = {
  id: number;
  title: string;
  previewImage: string;
  previewVideoSrc: string;
}

export type Review = {
  id: number;
  user: {
    id: number;
    name: string;
  };
  rating: number;
  comment: string;
  date: string;
}

export type UserData = {
  id: number;
  email: string;
  name: string;
  avatarSrc: string;
}

export type Error = {
 message: string;
 response?: {
   status: number;
 };
}

export type VideoProps = {
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


export type HandleWithEvt = (evt: React.SyntheticEvent) => void;

export type Handle = () => void;


export enum DataTypes {
  FETCH_CARDS_DATA = `FETCH_CARDS_DATA`,
  FETCH_REVIEWS_DATA = `FETCH_REVIEWS_DATA`,
  FETCH_CHECK_USER_AUTH = `FETCH_CHECK_USER_AUTH`,
  SEND_USER_AUTH_DATA = `SEND_USER_AUTH_DATA`,
  SEND_REVIEW_DATA = `SEND_REVIEW_DATA`,
  FETCH_USER_CARDS_DATA = `FETCH_USER_CARDS_DATA`,
  UPDATE_CARD = `UPDATE_CARD`,
}

export enum ShowingCardsAmount {
  ON_START = 8,
  BY_BUTTON = 8,
}

export enum Screens {
  MAIN = `MAIN`,
  CARD = `CARD`,
  USER_LIST = `USER_LIST`,
  VIDEO_PLAYER = `VIDEO_PLAYER`,
  SIGN_IN = `SIGN_IN`,
  ADD_REVIEW = `ADD_REVIEW`,
}

export enum CardMode {
  OVERVIEW = `overview`,
  DETAILS = `details`,
  REVIEWS = `reviews`,
}

export enum AuthError {
  UNAUTHORIZED = 401,
  BAD_DATA_REQUEST = 400,
}

export enum UserCardStatus {
  ADD = 1,
  DELETE = 0,
}
