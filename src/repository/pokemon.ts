import database from "../database/database";

class PokemonDatastore {
  public get(id: string) {
    if(id == null) return null;
    return database.pokemon[id];
  }
}

const pokemonDataStore = new PokemonDatastore();

export default pokemonDataStore;
