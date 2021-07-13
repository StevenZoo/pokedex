import { getSearchResult } from "../api/api";

let searchResultSequenceNumber = 0;
let searchResultLatestRead = 0;
const searchResultsCache = {};

function loadSearchResults(query) {
  if (searchResultsCache[query] !== undefined) {
    return Promise.resolve(searchResultsCache[query]);
  }

  let requestId = searchResultSequenceNumber;
  searchResultSequenceNumber++;

  return getSearchResult(query).then((data) => {
    if (requestId >= searchResultLatestRead) {
      if (data === null) return null;
      searchResultsCache[query] = data;
      return data;
    }
  });
}

export { loadSearchResults };
