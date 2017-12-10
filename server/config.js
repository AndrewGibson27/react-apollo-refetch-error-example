const env = process.env.NODE_ENV === 'production' ? 'production' : 'development';
const isDev = env === 'development';
const port = process.env.PORT || 3000;

module.exports = {
  env,
  port,
  isDev,
};
