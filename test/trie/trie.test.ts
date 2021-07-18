import Trie from "../../src/lib/trie/trie";

describe("Find whether a word is in trie", () => {
  const trie = buildTrie();

  it("Empty string", () => {
    let result = trie.get("");
    expect(result).toBe(null);
  });

  it("Single character in trie", () => {
    let result = trie.get("a");
    expect(result).toBe(5);
  });

  
  it("Single character not in trie", () => {
    let result = trie.get("b");
    expect(result).toBe(null);
  });

  it("Word not in trie", () => {
    let result = trie.get("blue");
    expect(result).toBe(null);
  });

  it("Word in trie", () => {
    let result = trie.get("green");
    expect(result).toBe(1);
  });

  it("Word partially in tree", () => {
    let result = trie.get("gree");
    expect(result).toBe(null);
  });

  it("Word between two words in tree", () => {
    let result = trie.get("greeti");
    expect(result).toBe(null);
  });

  it("Word extends a word in tree. (glee + ful)", () => {
    let result = trie.get("gleeful");
    expect(result).toBe(null);
  });
});

function buildTrie(): Trie {
  const trie = new Trie();
  trie.put("green", 1);
  trie.put("greet", 2);
  trie.put("greeting", 3);
  trie.put("glee", 4);
  trie.put("a", 5);
  return trie;
}
