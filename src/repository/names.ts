import database from "../database/database";

class NamesDatastore {
  public findPokemonId(name: string) {
    return database.namesIndex[name];
  }

  public getAllNames() {
    return Object.keys(database.namesIndex);
  }
}

const namesDataStore = new NamesDatastore();

export default namesDataStore;
