import database from "../database/database";

class PokemonDatastore {
  public get(id: string) {
    return database.pokemon[id];
  }
}

const pokemonDataStore = new PokemonDatastore();

export default pokemonDataStore;
