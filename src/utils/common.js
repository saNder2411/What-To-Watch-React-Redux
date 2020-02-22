const TimeShiftInMin = {
  YEAR: 525600,
  MONTH: 43800,
  WEEK: 10080,
  DAY: 1440,
  HOUR: 60,
  MINUTES: 1,
};

const MAX_RATING = 10;

export default class Common {
  static debounce(callback, timeout) {
    let lastTimeout = null;

    return (...parameters) => {

      if (lastTimeout) {
        clearTimeout(lastTimeout);
      }

      lastTimeout = setTimeout(() => {
        callback(...parameters);
      }, timeout);
    };
  }
  static getRandomNumberFromPeriod(max, min = 0) {
    return min + Math.floor((max - min) * Math.random());
  }

  static getRandomDate(shiftInMin = TimeShiftInMin.YEAR * 20, sign = -1) {
    const currentDate = new Date();
    const diffValue = sign * this.getRandomNumberFromPeriod(shiftInMin);

    currentDate.setMinutes(currentDate.getMinutes() + diffValue);

    return +currentDate;
  }

  static getRandomRating() {
    const randomNumber = Common.getRandomNumberFromPeriod(MAX_RATING + 1, 1);
    const randomDecimal = Common.getRandomNumberFromPeriod(MAX_RATING);

    return randomNumber < MAX_RATING ? `${randomNumber}.${randomDecimal}` : `${randomNumber}`;
  }
}
