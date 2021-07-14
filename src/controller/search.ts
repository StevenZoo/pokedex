import searchService from "../services/search";
import { getPokemon } from "../services/pokemon";
import { Nullable } from "../types/global";
import { Pokemon } from "../types/models";
import { AutocompleteResult } from "../types/api";

function clean(query: string): string {
  return query.toLowerCase().replace(/\s/g, "");
}

function toAutocompleteResult(pokemon: Pokemon): AutocompleteResult {
  return { id: pokemon.id, name: pokemon.name, sprite: pokemon.sprite };
}

function autocomplete(query: string): Array<AutocompleteResult> {
  query = clean(query);
  if (query === "") return [];
  return searchService
    .findIdsWithMatchingPrefix(query)
    .map((id) => getPokemon(id))
    .map((pokemon) => toAutocompleteResult(pokemon!))
    .sort((a, b) => a.name!.localeCompare(b.name!));
}

function search(query: string): Nullable<Pokemon> {
  query = clean(query);
  if (query === "") return null;
  let pokemon = getPokemon(query);
  if (pokemon != null) return pokemon;

  let closestMatches = searchService.findIdsWithMatchingPrefix(query);
  return getPokemon(closestMatches[0]);
}

export { autocomplete, search };
