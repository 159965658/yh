// https://github.com/michael-ciniawsky/postcss-load-config

module.exports = {
  "plugins": {
    "postcss-import": {},
    "postcss-url": {},
    "postcss-write-svg": { utf8: false },
    "postcss-pxtorem": {
      rootValue: 204.8,
      unitPrecision: 5,
      propList: ['*'],
      selectorBlackList: ['mint-', 'picker-'],
      replace: true,
      mediaQuery: false,
      minPixelValue: 1
    },
    // to edit target browsers: use "browserslist" field in package.json
    "autoprefixer": {}
  }
}
