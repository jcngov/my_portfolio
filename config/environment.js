var _ = require('lodash');

var localEnvVars = {
  TITLE:      'my_portfolio',
  SAFE_TITLE: 'my_portfolio'
};

// Merge all environmental variables into one object.
module.exports = _.extend(process.env, localEnvVars);
