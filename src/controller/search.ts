import searchService from "../services/search"
import pokemonDataStore from "../repository/pokemon";

function clean(query: string): string {
    return query.toLowerCase().replace(/\s/g, '');
}

function autoComplete(query: string) {
    query = clean(query);
    return searchService.findNamesWithMatchingPrefix(query);
}

function search(query: string) {
    query = clean(query);
    let pokemon = pokemonDataStore.get(query);
    if (pokemon != null) return pokemon;

    let closestMatches = searchService.findIdsWithMatchingPrefix(query);
    return pokemonDataStore.get(closestMatches[0]);
}

export {autoComplete, search};