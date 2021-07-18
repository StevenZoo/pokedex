import fs from "fs";
import { Pokemon, PokemonId } from "../types/models";

class Database {
  pokemon: Record<PokemonId, Pokemon> = {};

  constructor() {
    this.loadPokemonData();
  }

  private loadPokemonData() {
    const data = fs.readFileSync("src/data/dataset.json", "utf8");
    this.pokemon = JSON.parse(data);
  }
}

const database = new Database();
Object.freeze(database);

export default database;
