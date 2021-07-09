import searchService from "../services/search";
import { getPokemon } from "../services/pokemon";
import { Nullable } from "../types/global";
import { Pokemon } from "../types/models";

function clean(query: string): string {
  return query.toLowerCase().replace(/\s/g, "");
}

function autocomplete(query: string): Array<string> {
  query = clean(query);
  if(query === "") return [];
  return searchService
    .findIdsWithMatchingPrefix(query)
    .map((id) => getPokemon(id)?.name)
    .sort() as Array<string>;
}

function search(query: string): Nullable<Pokemon> {
  query = clean(query);
  if(query === "") return null;
  let pokemon = getPokemon(query);
  if (pokemon != null) return pokemon;

  let closestMatches = searchService.findIdsWithMatchingPrefix(query);
  return getPokemon(closestMatches[0]);
}

export { autocomplete, search };
