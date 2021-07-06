import { getAsciiCode, getAsciiChar } from "../../src/util/ascii-converter";

describe("Convert letter to ascii code", () => {
  it("Ascii code of a:", () => {
    expect(getAsciiCode("a")).toBe(97);
  });

  it("Ascii code of b:", () => {
    expect(getAsciiCode("b")).toBe(98);
  });

  it("Ascii code of c:", () => {
    expect(getAsciiCode("c")).toBe(99);
  });

  it("Ascii code of y:", () => {
    expect(getAsciiCode("y")).toBe(121);
  });

  it("Ascii code of z:", () => {
    expect(getAsciiCode("z")).toBe(122);
  });
});
