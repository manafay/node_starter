module.exports = {
  "parserOptions": {
      "ecmaVersion": 6,
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
