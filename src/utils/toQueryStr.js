/**
 * takes a query object and returns query string
 * @param {Object} queryObject
 * @returns {String}
 */

const toQueryStr = (queryObject) => {
  let queryStr = '';

  Object.keys(queryObject).forEach((key) => {
    queryStr += `${key}=${queryObject[key]}&`;
  });

  return `?${queryStr.slice(0, -1)}`;
};

export default toQueryStr;
