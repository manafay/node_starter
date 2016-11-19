module.exports = {
  "parserOptions": {
      "ecmaVersion": 2017,
  },
  "env": {
    "jest": true,
    "node": true,
    "es6": true
  },
  "extends": "airbnb-base",
  "rules": {
    "arrow-parens": ["warn", "as-needed"],
    "no-console": "warn",
    "curly": ["error", "multi"]
  }
}
