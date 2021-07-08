import database from "../database/database";

function lookUpPokemonId(name: string) {
  return database.namesIndex[name];
}

function lookUpAllPokemonIds(): Array<Array<string>> {
  return Object.entries(database.namesIndex);
}

export { lookUpPokemonId, lookUpAllPokemonIds };
