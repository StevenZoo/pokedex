import database from "../database/database";
import { Pokemon } from "../types/models";

class PokemonDatastore {
  public getAll(): Array<Pokemon> {
    return Object.values(database.pokemon);
  }

  public get(id: number) {
    return database.pokemon[id];
  }
}

const pokemonDataStore = new PokemonDatastore();

export default pokemonDataStore;
