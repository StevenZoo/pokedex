import pokemonDataStore from "../repository/pokemon";
import { Nullable } from "../types/global";
import { Pokemon } from "../types/models";

function getAllPokemon() {
  return pokemonDataStore.getAll();
}

function getPokemon(id: string): Nullable<Pokemon> {
  if (id == null) return null;
  return pokemonDataStore.get(id);
}

export { getPokemon, getAllPokemon };
