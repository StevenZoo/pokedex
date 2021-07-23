import { getNamesIndex } from "./pokemon";
import Trie from "../lib/trie/trie";

class SearchService {
  private names: Trie;

  constructor() {
    this.names = new Trie();
    this.populateTrie();
  }

  private populateTrie() {
    return getNamesIndex().then((index) => {
      for (let [name, id] of Object.entries(index)) {
        this.names.put(name, id);
      }
    });
  }

  public findIdsWithMatchingPrefix(prefix: string): Array<number> {
    if (prefix == null) return [];

    let matchingIds: Set<number> = this.names.searchIdsMatchingPrefix(prefix);
    return [...matchingIds];
  }
}

const searchService = new SearchService();

export default searchService;
