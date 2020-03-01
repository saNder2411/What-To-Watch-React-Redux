const TimeShiftInMin = {
  YEAR: 525600,
  MONTH: 43800,
  WEEK: 10080,
  DAY: 1440,
  HOUR: 60,
  MINUTES: 1,
};

const Month = [`January`, `February`, `March`, `April`, `May`, `June`, `July`, `August`, `September`, `October`, `November`, `December`];

const MAX_RATING = 10;

export default class Common {
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

  static calcCardLevel(ratingVal, [minVal, middleLowVal, middleVal, maxVal]) {
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
  }

  static parseDateToStr(date) {
    const day = new Date(date).getDate();
    const month = new Date(date).getMonth();
    const year = new Date(date).getFullYear();

    return `${Month[month]} ${day}, ${year}`;
  }

  static dividedArrayInHalf(array) {
    const firstPartLength = ((array.length % 2) + array.length) / 2;

    return [array.slice(0, firstPartLength), array.slice(firstPartLength)];
  }

  static extend(a, b) {
    return Object.assign({}, a, b);
  }
}
