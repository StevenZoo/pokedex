import { getAllPokemon } from "./pokemon";
import Trie from "../lib/trie/trie";

class SearchService {
  private names: Trie;

  constructor() {
    this.names = this.buildTrie();
  }

  private buildTrie() {
    const trie = new Trie();
    const entries = getAllPokemon();
    for (let pokemon of entries) {
      let id = pokemon.id!;
      trie.put(pokemon.name!, pokemon.id!);

      let alternatives = pokemon.alternatives || [];
      for (let alternative of alternatives) {
        trie.put(alternative, id);
      }
    }
    return trie;
  }

  public findIdsWithMatchingPrefix(prefix: string): Array<string> {
    if (prefix == null) return [];

    let matchingIds: Set<string> = this.names.searchIdsMatchingPrefix(prefix);
    return [...matchingIds];
  }
}

const searchService = new SearchService();

export default searchService;
