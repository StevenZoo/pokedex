import pokemonDataStore from "../repository/pokemon";
import { lookUpPokemonId } from "../repository/pokemon-index";
import { Pokemon } from "../types/models";

function getPokemon(id: string): Pokemon | null {
  if (id == null) return null;
  return pokemonDataStore.get(id);
}

function getPokemonByName(name: string): Pokemon | null {
  let id: string = lookUpPokemonId(name);
  return getPokemon(id);
}

export { getPokemon, getPokemonByName };
