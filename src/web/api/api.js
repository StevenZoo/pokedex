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
    if (response.status >= 400) {
      throw new Error("Something went wrong.");
    }
  }
  return [];
}

async function getSearchResult(query) {
  let url = toUrlString("/api/search", { q: query });
  let response = await fetch(url);
  if (response.ok) {
    if (response.status === 204) return null;
    return await response.json();
  } else {
    if (response.status > 400) {
      throw Error("Something went wrong.");
    }
  }
  return null;
}

export { getSuggestions, getSearchResult };
