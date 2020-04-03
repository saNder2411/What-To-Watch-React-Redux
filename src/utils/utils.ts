const Month = [`January`, `February`, `March`, `April`, `May`, `June`, `July`, `August`, `September`, `October`, `November`, `December`];

const MINUTES_IN_HOUR = 60;

enum RatingLevels {
  BAD = `Bad`,
  NORMAL = `Normal`,
  GOOD = `Good`,
  VERY_GOOD = `Very good`,
  AWESOME = `Awesome`,
}

const calcCardLevel = (ratingVal: number, [minVal, middleLowVal, middleVal, maxVal]: Array<number>) => {
  let level: RatingLevels = RatingLevels.BAD;

  if (ratingVal >= minVal && ratingVal <= middleLowVal) {
    level = RatingLevels.NORMAL;
  } else if (ratingVal >= middleLowVal && ratingVal <= middleVal) {
    level = RatingLevels.GOOD;
  } else if (ratingVal >= middleVal && ratingVal < maxVal) {
    level = RatingLevels.VERY_GOOD;
  } else if (ratingVal >= maxVal) {
    level = RatingLevels.AWESOME;
  }

  return level;
};

const dividedArrayInHalf = (array) => {
  const firstPartLength = ((array.length % 2) + array.length) / 2;

  return [array.slice(0, firstPartLength), array.slice(firstPartLength)];
};

const parseDateToStr = (date) => {
  const day = new Date(date).getDate();
  const month = new Date(date).getMonth();
  const year = new Date(date).getFullYear();

  return `${Month[month]} ${day}, ${year}`;
};

const getTimeInHoursAndMinutes = (timeInMin: number) => {
  const runtime = {
    hours: `0`,
    minutes: `0`,
  };

  if (timeInMin < MINUTES_IN_HOUR) {
    runtime.minutes = (timeInMin < 10) ? `0${timeInMin}` : `${timeInMin}`;
    return runtime.minutes;
  }

  runtime.minutes = (timeInMin % MINUTES_IN_HOUR).toString();
  runtime.hours = ((timeInMin - (+runtime.minutes)) / MINUTES_IN_HOUR).toString();

  return (runtime.hours) ? `${runtime.hours}h ${runtime.minutes}m` : `${runtime.minutes}m`;
};

const extend = (a, ...b) => Object.assign({}, a, ...b);

const getAppRoute = (id = `:id`) => ({
  ROOT: `/`,
  CARDS: `/cards/${id}/`,
  PLAYER: `/player/${id}/`,
  LOGIN: `/login/`,
  REVIEW: `/cards/${id}/review/`,
  USER_LIST: `/userList/`,
});

const noop = () => void 0;

export {calcCardLevel, parseDateToStr, dividedArrayInHalf, getTimeInHoursAndMinutes,
  extend, getAppRoute, noop};
