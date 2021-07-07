import database from "../database/database";

class NamesDatastore {
  public getIdByName(name: string) {
    return database.namesIndex[name];
  }

  public getAllNames() {
    return Object.keys(database.namesIndex);
  }
}

const namesDataStore = new NamesDatastore();

export default namesDataStore;
