import { apiEndPoint } from './constants'

export const contructApiUrl = (
  searchQuery,
  sortByStars,
  isDescending,
  languageFilter,
  ) => {
  let apiUrl = `${apiEndPoint}?q=${searchQuery}`;

  if (languageFilter) {
    apiUrl = apiUrl + `+language:${languageFilter}`;
  }

  if (sortByStars) {
    apiUrl = apiUrl + `&sort=stars&order=${isDescending ? 'desc' : 'asc'}`;
  }

  return apiUrl;
};