module.exports = {
  root: true,
  extends: ['eslint:recommended'],
  env: {
    node: true,
    es6: true,
  },
  rules: {
    quotes: [2, 'single', { avoidEscape: true, allowTemplateLiterals: true }],
  },
};
