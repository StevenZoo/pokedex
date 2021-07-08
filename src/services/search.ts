import { lookUpAllPokemonIds } from "../repository/pokemon-index";
import Trie from "../lib/trie/trie";

class SearchService {
  private names: Trie;

  constructor() {
    this.names = this.buildTrie();
  }

  private buildTrie() {
    const trie = new Trie();
    const entries: Array<Array<string>> = lookUpAllPokemonIds();
    trie.putAll(entries);
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
