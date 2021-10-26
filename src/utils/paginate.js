import _ from 'lodash';

/**
 * Handles the division of pages in the pagination.
 *
 * @param {Object} items Information about the articles inside the fakeArticle service.
 * @param {Number} pageNumber The number of the page.
 * @param {Number} pageSize The capacity of articles in each page.
 *
 * @return {Array} New array of articles.
 */
function paginate(items, pageNumber, pageSize) {
  const startIndex = (pageNumber - 1) * pageSize;
  return _(items).slice(startIndex).take(pageSize).value();
}

export default paginate;
