require('dotenv').config();
const { ContentItem, DeliveryClient, TypeResolver } = require('kentico-cloud-delivery');
const withSass = require('@zeit/next-sass');

const getItems = (type, lang) => {
  const deliveryClient = new DeliveryClient({
    projectId: process.env.KENTICO_PROJECT_ID,
    typeResolvers: [
      new TypeResolver(type, () => new ContentItem()),
    ]
  });

  return deliveryClient.items()
  .languageParameter(lang)
  .type(type)
  .toPromise()
};

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

    const { items: itemsEN } = await getItems('post', 'en');
    const postsEN = itemsEN.reduce((acc, item) => {
      return {
        ...acc,
        [`/en/posts/${item.slug.value}`]: {
          page: '/[lang]/posts/[slug]',
          query: {
            lang: 'en',
            slug: item.slug.value
          }
        }
      }
    }, {});

    const { items: itemsNl } = await getItems('post', 'nl');
    const postsNL = itemsNl.reduce((acc, item) => {
      return {
        ...acc,
        [`/nl/posts/${item.slug.value}`]: {
          page: '/[lang]/posts/[slug]',
          query: {
            lang: 'nl',
            slug: item.slug.value
          }
        }
      }
    }, {});

    routes = { ...routes, ...postsNL, ...postsEN };

    return routes;
  },
});
