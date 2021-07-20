import pokemonDataStore from "../repository/pokemon";
import { Nullable } from "../types/global";
import { Pokemon } from "../types/models";

function getNamesIndex() {
  return pokemonDataStore.getNamesIndex();
}

async function getPokemon(id: number): Promise<Nullable<Pokemon>> {
  if (id == null) return null;
  return pokemonDataStore.get(id);
}

export { getPokemon, getNamesIndex };
