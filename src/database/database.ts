import fs from "fs";
import { Pokemon, PokemonId, PokemonName } from "../types/models";

class Database {
  pokemon: Record<PokemonId, Pokemon> = {};
  namesIndex: Record<PokemonName, PokemonId> = {};

  constructor() {
    this.loadPokemonData();
    this.loadNameIndex();
  }

  private loadPokemonData() {
    const data = fs.readFileSync("src/data/dataset.json", "utf8");
    this.pokemon = JSON.parse(data);
  }

  private loadNamesIndex() {
    const data = fs.readFileSync("src/data/index.json", "utf8");
    this.namesIndex = JSON.parse(data);
  }
}

const database = new Database();
Object.freeze(database);

export default database;
