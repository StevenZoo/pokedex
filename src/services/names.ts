import pokemonDataStore from "../repository/pokemon";
import namesDataStore from "../repository/names";
import Trie from "../lib/trie/trie";

class NamesSearchService {
  private namesTrie;

  constructor() {
    this.namesTrie = this.buildTrie();
  }

  private buildTrie() {
    const trie = new Trie();
    const names = namesDataStore.getAllNames();
    for (let name of names) {
      let id = namesDataStore.getIdByName(name);
      trie.put(name, id);
    }
    return trie;
  }

  public findMatchingNames(prefix: string): Array<string> {
    if (prefix == null) return [];

    let matchingIds: Set<string> = this.namesTrie.searchIdsByPrefix(prefix);
    let matches: Array<string> = [...matchingIds]
      .map((id) => pokemonDataStore.get(id)?.name)
      .filter((name) => name !== undefined)
      .sort() as Array<string>;

    return matches;
  }
}

export default NamesSearchService;
