import { deepCopy } from '../../utils';

const initialState = {};

/**
 * @description
 * The reducers to handle firebase calls. Renamed to database so
 * as not to cause a name clash with the instance of firebase in
 * the store.
 *
 * @param state
 * @param action
 * @returns {Object}
 */
export default function database(state = initialState, action) {
  const newState = deepCopy(state);
  const {
    payload, document, type, key,
  } = action;
  switch (type) {
    case 'FETCH_ITEM':
      newState[document][key] = payload;
      return newState;
    case 'FETCH_ITEMS':
      newState[document] = payload;
      return newState;
    default:
      return state;
  }
}
