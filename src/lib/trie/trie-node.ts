class TrieNode {
  children: Array<Nullable<TrieNode>>;
  id: number | null;

  constructor() {
    this.children = [];
    this.id = null;
  }
}

export default TrieNode;
