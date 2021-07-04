import { getAsciiOffset, getAsciiChar } from "../../src/util/ascii-converter";

describe("Trie test", () => {
  it("Ascii code of a:", () => {
    expect(getAsciiOffset("a")).toBe(0);
  });

  it("Ascii code of b:", () => {
    expect(getAsciiOffset("b")).toBe(1);
  });

  it("Ascii code of c:", () => {
    expect(getAsciiOffset("c")).toBe(2);
  });

  it("Ascii code of y:", () => {
    expect(getAsciiOffset("y")).toBe(24);
  });

  it("Ascii code of z:", () => {
    expect(getAsciiOffset("z")).toBe(25);
  });
});
