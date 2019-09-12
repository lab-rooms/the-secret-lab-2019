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

      '/what': { page: '/what' },
      '/en/what': { page: '/what', query: { 'lang': 'en' } },
      '/nl/what': { page: '/what', query: { 'lang': 'nl' } },

      '/who': { page: '/who' },
      '/en/who': { page: '/who', query: { 'lang': 'en' } },
      '/nl/who': { page: '/who', query: { 'lang': 'nl' } },

      '/contact': { page: '/contact' },
      '/en/contact': { page: '/contact', query: { 'lang': 'en' } },
      '/nl/contact': { page: '/contact', query: { 'lang': 'nl' } },
    };

    return routes;
  },
});
