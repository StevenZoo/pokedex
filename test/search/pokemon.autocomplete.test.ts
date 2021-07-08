import { autocomplete, search } from "../../src/controller/search";

describe("Test autocomplete suggestions", () => {
  it("Exact match", () => {
    expect(autocomplete("pikachu")).toEqual(["pikachu"]);
  });

  it("Capital letters", () => {
    expect(autocomplete("PiKa")).toEqual(["pikachu"]);
  });

  it("Leading whitespace", () => {
    expect(autocomplete(" pikachu")).toEqual(["pikachu"]);
  });

  it("Whitespace in middle", () => {
    expect(autocomplete("p ika chu")).toEqual(["pikachu"]);
  });

  it("Trailing whitespace", () => {
    expect(autocomplete("pikachu ")).toEqual(["pikachu"]);
  });

  it("No match", () => {
    expect(autocomplete("pikachuu")).toEqual([]);
  });

  it("Matches for 'pi'", () => {
    expect(autocomplete("pi")).toEqual(["pidgeot", "pidgeotto", "pidgey", "pikachu", "pinsir"]);
  });

  it("Matches for 'pika'", () => {
    expect(autocomplete("pika")).toEqual(["pikachu"]);
  });
});
