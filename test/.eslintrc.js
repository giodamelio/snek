module.exports = {
  extends: ['@giodamelio/thehelpining/test'],
  env: {
    jest: true,
  },
  rules: {
    'security/detect-child-process': 'off',
  },
};
