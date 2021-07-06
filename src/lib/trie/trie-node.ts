import { Nullable } from "../../types/global";

class TrieNode {
  children: Array<Nullable<TrieNode>>;
  id: Nullable<string>;

  constructor() {
    this.children = [];
    this.id = null;
  }
}

export default TrieNode;
