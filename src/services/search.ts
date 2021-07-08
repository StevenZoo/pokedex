import { getPokemon } from "../services/pokemon";
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

  public findNamesWithMatchingPrefix(prefix: string): Array<string> {
    if (prefix == null) return [];

    let matchingIds: Set<string> = this.names.searchIdsMatchingPrefix(prefix);
    return this.mapToNames([...matchingIds]);
  }

  public findIdsWithMatchingPrefix(prefix: string): Array<string> {
    if (prefix == null) return [];

    let matchingIds: Set<string> = this.names.searchIdsMatchingPrefix(prefix);
    return [...matchingIds];
  }

  private mapToNames(ids: Array<string>): Array<string> {
    return ids
      .map((id) => getPokemon(id)?.name)
      .filter((name) => name !== undefined)
      .sort() as Array<string>;
  }
}

const searchService = new SearchService();

export default searchService;
