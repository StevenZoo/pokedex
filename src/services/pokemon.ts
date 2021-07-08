import pokemonDataStore from "../repository/pokemon";
import { lookUpPokemonId } from "../repository/pokemon-index";
import { Nullable } from "../types/global";
import { Pokemon } from "../types/models";

function getPokemon(id: string): Nullable<Pokemon> {
  if (id == null) return null;
  return pokemonDataStore.get(id);
}

function getPokemonByName(name: string): Nullable<Pokemon> {
  let id: string = lookUpPokemonId(name);
  return getPokemon(id);
}

export { getPokemon, getPokemonByName };
