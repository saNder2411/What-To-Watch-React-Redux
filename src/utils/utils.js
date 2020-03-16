const Month = [`January`, `February`, `March`, `April`, `May`, `June`, `July`, `August`, `September`, `October`, `November`, `December`];
const MINUTES_IN_HOUR = 60;

const calcCardLevel = (ratingVal, [minVal, middleLowVal, middleVal, maxVal]) => {
  const ratingToNum = +ratingVal;
  let level = `Bad`;

  if (ratingToNum >= minVal && ratingToNum <= middleLowVal) {
    level = `Normal`;
  } else if (ratingToNum >= middleLowVal && ratingToNum <= middleVal) {
    level = `Good`;
  } else if (ratingToNum >= middleVal && ratingToNum < maxVal) {
    level = `Very good`;
  } else if (ratingToNum >= maxVal) {
    level = `Awesome`;
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

const getTimeInHoursAndMinutes = (timeInMin) => {
  const runtime = {
    hours: `0`,
    minutes: `0`,
  };

  if (timeInMin < MINUTES_IN_HOUR) {
    runtime.minutes = (timeInMin < 10) ? `0${timeInMin}` : `${timeInMin}`;
    return runtime.minutes;
  }

  runtime.minutes = timeInMin % MINUTES_IN_HOUR;
  runtime.hours = (timeInMin - runtime.minutes) / MINUTES_IN_HOUR;

  return (runtime.hours) ? `${runtime.hours}h ${runtime.minutes}m` : `${runtime.minutes}m`;
};

const extend = (a, ...b) => Object.assign({}, a, ...b);

export {calcCardLevel, parseDateToStr, dividedArrayInHalf, getTimeInHoursAndMinutes, extend};
