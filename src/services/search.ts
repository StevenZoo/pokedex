import pokemonDataStore from "../repository/pokemon";
import namesDataStore from "../repository/names";
import Trie from "../lib/trie/trie";

class SearchService {
  private names: Trie;

  constructor() {
    this.names = this.buildTrie();
  }

  private buildTrie() {
    const trie = new Trie();
    const names: Array<string> = namesDataStore.getAllNames();
    for (let name of names) {
      let id = namesDataStore.findPokemonId(name);
      trie.put(name, id);
    }
    return trie;
  }

  public findNamesWithMatchingPrefix(prefix: string): Array<string> {
    if (prefix == null) return [];

    let matchingIds: Set<string> = this.names.searchIdsByPrefix(prefix);
    let matches: Array<string> = [...matchingIds]
      .map((id) => pokemonDataStore.get(id)?.name)
      .filter((name) => name !== undefined)
      .sort() as Array<string>;

    return matches;
  }

  public findIdsWithMatchingPrefix(prefix: string): Array<string> {
    if (prefix == null) return [];

    let matchingIds: Set<string> = this.names.searchIdsByPrefix(prefix);
    return [...matchingIds]
  }
}

const searchService = new SearchService();

export default searchService;
