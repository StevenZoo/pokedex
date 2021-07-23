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

async function autocomplete(query: string): Promise<Array<AutocompleteResult>> {
  query = clean(query);
  if (query === "") return [];
  const matchingPokemon = searchService.findIdsWithMatchingPrefix(query).map((id) => getPokemon(id));

  return Promise.all(matchingPokemon).then((matches) => {
    return matches.map((pokemon) => toAutocompleteResult(pokemon!)).sort((a, b) => a.name!.localeCompare(b.name!));
  });
}

async function search(query: string): Promise<Nullable<Pokemon>> {
  query = clean(query);
  if (query === "") return null;

  let closestMatches = searchService.findIdsWithMatchingPrefix(query);
  return getPokemon(closestMatches[0]);
}

export { autocomplete, search };
