import {
  createStore,
  applyMiddleware,
} from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './reducers';
import { isServer } from '../utils';

/**
 * @class Store
 *
 * @description
 * Store class that initializes the redux store.
 * Also apples the server side setup to the window object for when its in
 * the client.
 *
 */
export default class Store {
  /**
   * @description
   * initialize the store on the server and pick it up in the client.
   *
   * @param {Object} initialState - initial state of the store.
   * @returns {*}
   */
  static getOrCreateStore(initialState) {
    if (isServer) {
      return Store.configureStore(initialState);
    }

    if (!window.NEXT_REDUX_STORE) {
      window.NEXT_REDUX_STORE = Store.configureStore(initialState);
    }

    return window.NEXT_REDUX_STORE;
  }

  /**
   * @description
   * Store creator.
   *
   * @param {Object} initialState
   * @returns {Store}
   */
  static configureStore(initialState) {
    const composeEnhancers = composeWithDevTools({ trace: true, traceLimit: 25 });
    return createStore(
      rootReducer,
      initialState,
      composeEnhancers(
        applyMiddleware(
          thunk,
        ),
      ),
    );
  }
}
