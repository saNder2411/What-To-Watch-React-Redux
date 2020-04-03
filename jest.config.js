module.exports = {
  rootDir: `./src`,
  transform: {
    "^.+\\.tsx?$": `ts-jest`,
    "^.+\\.ts?$": `ts-jest`,
  },
  moduleNameMapper: {
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": `<rootDir>/__mocks__/fileMock.js`,
    "\\.(css|less)$": `identity-obj-proxy`
  },
  testRegex: `.test.(tsx?|ts?)$`,
  moduleFileExtensions: [
    `ts`,
    `tsx`,
    `js`,
    `json`,
    `node`,
    `css`,
  ],
};
