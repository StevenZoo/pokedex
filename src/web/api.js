function toUrlString(endpoint, queryParams) {
  let url = new URL(endpoint, window.location.origin);
  url.search = new URLSearchParams(queryParams);
  return url.toString();
}

async function getSuggestions(query) {
  let url = toUrlString("/api/autocomplete", { q: query });
  let response = await fetch(url);

  if (response.ok) {
    return await response.json();
  } else {
    console.error("Error: " + response.status);
  }
  return [];
}

async function getSearchResult(query) {
  let url = toUrlString("/api/search", { q: query });
  console.log("Fetching " + url);
  let response = await fetch(url);

  if (response.ok) {
    return await response.json();
  } else {
    console.error("Error: " + response.status);
  }
  return null;
}

export { getSuggestions, getSearchResult };
