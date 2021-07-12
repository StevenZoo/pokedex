import { getSearchResult } from "../api/api";
import { renderSearchResult } from "../components/SearchResult";

let searchResultSequenceNumber = 0;
let searchResultLatestRead = 0;
const searchResultsCache = {};

function loadSearchResults(query) {
  if (searchResultsCache[query] !== undefined) {
    renderSearchResult(searchResultsCache[query]);
  }

  let requestId = searchResultSequenceNumber;
  searchResultSequenceNumber++;
  getSearchResult(query).then((data) => {
    if (requestId >= searchResultLatestRead) {
      renderSearchResult(data);
    }
    searchResultsCache[query] = data;
  });
}

export { loadSearchResults };
