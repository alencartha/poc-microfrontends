// mfe-produtos/webpack.prod.config.js
const baseConfig = require('./webpack.config');

module.exports = async (config, context) => {
  return baseConfig(config, context);
};
