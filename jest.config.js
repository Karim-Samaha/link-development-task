module.exports = {
  rootDir: "src",
  testEnvironment: "jsdom",
  transform: {
    "^.+\\.(j|t)sx?$": "babel-jest",
  },
  moduleNameMapper: {
    "\\.(css)$": "identity-obj-proxy",
    "single-spa-react/parcel": "single-spa-react/lib/cjs/parcel.cjs",
    '\\.(png|jpg|jpeg|webp|ttf|woff|woff2|svg|mp4)$': '<rootDir>/mooks/fileMock.js'

  },
  setupFilesAfterEnv: ["@testing-library/jest-dom"],
};
