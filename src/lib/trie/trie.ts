import TrieNode from "./trie-node";
import { getAsciiCode, getAsciiChar } from "../../util/ascii-converter";
import { Nullable } from "../../types/global";

class Trie {
  private root: TrieNode;

  constructor() {
    this.root = new TrieNode();
  }

  private _get(node: Nullable<TrieNode>, key: string, index: number = 0): Nullable<TrieNode> {
    if (node == null) return null;
    if (index === key.length) return node;
    let offset: number = getAsciiCode(key, index);
    return this._get(node.children[offset], key, index + 1);
  }

  public get(key: string): Nullable<number> {
    let node: Nullable<TrieNode> = this._get(this.root, key, 0);
    if (node === null) return null;
    return node.id;
  }

  public put(key: string, id: number): void {
    let current: TrieNode = this.root;
    for (let i = 0; i < key.length; i++) {
      let offset: number = getAsciiCode(key, i);
      if (current.children[offset] == null) {
        current.children[offset] = new TrieNode();
      }
      current = current.children[offset]!;
    }
    current!.id = id;
  }

  public searchKeysMatchingPrefix(prefix: string): Set<string> {
    let matches: Set<string> = new Set();
    this.collect(this._get(this.root, prefix, 0), prefix, matches);
    return matches;
  }

  private collect(node: Nullable<TrieNode>, prefix: string, set: Set<string>): void {
    if (node == null) return;
    if (node.id != null) set.add(prefix);
    for (let i = 0; i < node.children.length; i++) {
      this.collect(node.children[i], prefix + getAsciiChar(i), set);
    }
  }

  public searchIdsMatchingPrefix(prefix: string): Set<number> {
    let matches: Set<number> = new Set();
    let start = this._get(this.root, prefix, 0);
    this.collectIds(this._get(this.root, prefix, 0), matches);
    return matches;
  }

  private collectIds(node: Nullable<TrieNode>, set: Set<number>): void {
    if (node == null) return;
    if (node.id != null) set.add(node.id);
    for (let i = 0; i < node.children.length; i++) {
      this.collectIds(node.children[i], set);
    }
  }
}

export default Trie;
