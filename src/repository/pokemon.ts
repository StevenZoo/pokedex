import { get } from "../aws/dynamo-db-client";
import { getNamesIndex } from "../aws/s3-client";
import { Pokemon, PokemonId } from "../types/models";
import fs from "fs";

class PokemonDatastore {
  public getNamesIndex(): Promise<Record<string, PokemonId>> {
    return fs.promises
      .readFile("src/data/index.json", "utf-8")
      .then((data) => JSON.parse(data))
      .catch((err) => {
        console.log("No local index found. Fetching from S3 bucket.");
        return getNamesIndex();
      });
  }

  public get(id: number): Promise<Pokemon> {
    return get(id);
  }
}

const pokemonDataStore = new PokemonDatastore();

export default pokemonDataStore;
