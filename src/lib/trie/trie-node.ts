class TrieNode {
  children: Array<Nullable<TrieNode>>;
  id: Nullable<number>;

  constructor() {
    this.children = [];
    this.id = null;
  }
}

export default TrieNode;
