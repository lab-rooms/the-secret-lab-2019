import {
  ContentItem,
  DeliveryClient,
  TypeResolver,
} from 'kentico-cloud-delivery';

export const getItems = (type, lang) => {
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

export const getItem = (type, key, lang) => {
  const deliveryClient = new DeliveryClient({
    projectId: process.env.KENTICO_PROJECT_ID,
    typeResolvers: [
      new TypeResolver(type, () => new ContentItem()),
    ]
  });

  return deliveryClient.item(key)
  .languageParameter(lang)
  .toPromise()
};
