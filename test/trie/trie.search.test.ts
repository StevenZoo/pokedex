import Trie from "../../src/lib/trie/trie";

describe("Search by prefix", () => {
  const trie = buildTrie();

  it("Empty string", () => {
    const expected = new Set(["green", "greet", "glee", "greeting"]);
    const result = trie.keysWithPrefix("");

    expect(result).toEqual(expected);
  });

  it("Common prefix", () => {
    const expected = new Set(["green", "greet", "greeting"]);
    const result = trie.keysWithPrefix("gr");

    expect(result).toEqual(expected);
  });

  it("Common prefix", () => {
    const expected = new Set(["green", "greet", "greeting"]);
    const result = trie.keysWithPrefix("gre");

    expect(result).toEqual(expected);
  });

  it("No matching prefixes", () => {
    const expected = new Set();
    const result = trie.keysWithPrefix("gret");

    expect(result).toEqual(expected);
  });

  it("Exact match with no more words", () => {
    const expected = new Set(["greeting"]);
    const result = trie.keysWithPrefix("greeting");

    expect(result).toEqual(expected);
  });

  it("Exact match additional words", () => {
    const expected = new Set(["greet", "greeting"]);
    const result = trie.keysWithPrefix("greet");

    expect(result).toEqual(expected);
  });
});

function buildTrie(): Trie {
  const trie = new Trie();
  trie.put("green", 1);
  trie.put("greet", 2);
  trie.put("glee", 3);
  trie.put("greeting", 4);
  return trie;
}
