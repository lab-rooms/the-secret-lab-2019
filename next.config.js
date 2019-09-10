require('dotenv').config();
const withSass = require('@zeit/next-sass');

module.exports = withSass({
  env: {
    KENTICO_PROJECT_ID: process.env.KENTICO_PROJECT_ID
  },
  exportPathMap: async function (
    defaultPathMap,
    { dev, dir, outDir, distDir, buildId }
  ) {
    let routes = {
      '/': { page: '/' },
      '/en': { page: '/', query: { 'lang': 'en' } },
      '/nl': { page: '/', query: { 'lang': 'nl' } },
    };

    return routes;
  },
});
