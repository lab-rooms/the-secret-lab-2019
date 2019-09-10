/**
 * @description
 * To guarantee a full deep copy of an object or array this is the simplest method.
 *
 * @param {Object || Array} input
 * @returns {Object || Array}
 */
export const deepCopy = input => input && JSON.parse(JSON.stringify(input));

/**
 * @description
 * Checks if you are on the server.
 *
 * @type {boolean}
 */
export const isServer = typeof window === 'undefined';

/**
 * @description
 * Checks if you are on the server.
 *
 * @type {boolean}
 */
export const isBrowser = !isServer;
