import TrieNode from "./trie-node";
import { getAsciiOffset, getAsciiChar } from "../../util/ascii-converter";

class Trie {
  private root: TrieNode;

  constructor() {
    this.root = new TrieNode();
  }

  private _get(node: Nullable<TrieNode>, key: string, index: number = 0): Nullable<TrieNode> {
    if (node == null) return null;
    if (index === key.length) return node;
    let offset: number = getAsciiOffset(key, index);
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
      let offset: number = getAsciiOffset(key, i);
      if (current.children[offset] == null) {
        current.children[offset] = new TrieNode();
      }
      current = current.children[offset]!;
    }
    current!.id = id;
  }

  public keysWithPrefix(prefix: string): Set<string> {
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
}

export default Trie;
