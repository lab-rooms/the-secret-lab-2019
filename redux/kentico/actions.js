import { getItem, getItems } from '../../controllers'
/*
 * action creators
 */

const getContentItemFrom = (document, key, lang) => async (dispatch) => {
  const data = await getItem(document, key, lang);
  dispatch({
    type: 'FETCH_ITEM',
    payload: data.item,
    document,
  });
};

const getContentFrom = (document, lang) => async (dispatch) => {
  const data = await getItems(document, lang);
  dispatch({
    type: 'FETCH_ITEM',
    payload: data.items,
    document,
  });
};

export {
  getContentItemFrom,
  getContentFrom,
};
