/**
 * UrlPages: Create an object with the current page and the URL of the previous and next page.
 * @param  {Object} req: Request
 * @param  {String} resource: example -> news, categories, members, testimonials
 * @return {Object} { currentPage, previousPage, nextPage }
 */
const urlPages = (req, resource) => {
  const { page } = req.query;
  // 1. Parse and validation
  const currentPage = +page || 0;
  const previousPage = +page > 0 ? +page - 1 : 0;
  const nextPage = +page + 1 || 1;

  // 1.1 Build URL: previous & next page
  const previousPageQuery = `${req.protocol}://${req.get(
    'host'
  )}/${resource}?page=${previousPage}`;
  const nextPageQuery = `${req.protocol}://${req.get(
    'host'
  )}/${resource}?page=${nextPage}`;

  // 1.2 Pagination pages: previous, current, next
  return {
    currentPage,
    previousPage: previousPageQuery,
    nextPage: nextPageQuery,
  };
};

module.exports = {
  urlPages,
};
