import Trie from "../../src/lib/trie/trie";

describe("Search keys by prefix", () => {
  const trie = buildTrie();

  it("Empty string", () => {
    const expected = new Set(["green", "greet", "glee", "greeting"]);
    const result = trie.searchKeysByPrefix("");

    expect(result).toEqual(expected);
  });

  it("Common prefix", () => {
    const expected = new Set(["green", "greet", "greeting"]);
    const result = trie.searchKeysByPrefix("gr");

    expect(result).toEqual(expected);
  });

  it("Common prefix", () => {
    const expected = new Set(["green", "greet", "greeting"]);
    const result = trie.searchKeysByPrefix("gre");

    expect(result).toEqual(expected);
  });

  it("No matching prefixes", () => {
    const expected = new Set();
    const result = trie.searchKeysByPrefix("gret");

    expect(result).toEqual(expected);
  });

  it("Exact match with no more words", () => {
    const expected = new Set(["greeting"]);
    const result = trie.searchKeysByPrefix("greeting");

    expect(result).toEqual(expected);
  });

  it("Exact match additional words", () => {
    const expected = new Set(["greet", "greeting"]);
    const result = trie.searchKeysByPrefix("greet");

    expect(result).toEqual(expected);
  });
});

describe("Search ids by prefix", () => {
  const trie = buildTrie();

  it("Empty string", () => {
    const expected = new Set(["1", "2", "3", "4"]);
    const result = trie.searchIdsByPrefix("");

    expect(result).toEqual(expected);
  });

  it("Common prefix", () => {
    const expected = new Set(["1", "2", "4"]);
    const result = trie.searchIdsByPrefix("gr");

    expect(result).toEqual(expected);
  });

  it("Common prefix", () => {
    const expected = new Set(["1", "2", "4"]);
    const result = trie.searchIdsByPrefix("gre");

    expect(result).toEqual(expected);
  });

  it("No matching prefixes", () => {
    const expected = new Set();
    const result = trie.searchIdsByPrefix("gret");

    expect(result).toEqual(expected);
  });

  it("Exact match with no more words", () => {
    const expected = new Set(["4"]);
    const result = trie.searchIdsByPrefix("greeting");

    expect(result).toEqual(expected);
  });

  it("Exact match additional words", () => {
    const expected = new Set(["2", "4"]);
    const result = trie.searchIdsByPrefix("greet");

    expect(result).toEqual(expected);
  });
});


function buildTrie(): Trie {
  const trie = new Trie();
  trie.put("green", "1");
  trie.put("greet", "2");
  trie.put("glee", "3");
  trie.put("greeting", "4");
  return trie;
}
