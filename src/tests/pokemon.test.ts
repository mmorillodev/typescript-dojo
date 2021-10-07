import { pokeAPI } from "../api/pokeAPI";
import PokemonList from "../mock/PokemonList.json";
import PokemonDetails from "../mock/PokemonDetails.json";
import { SimplePokeInfo } from "../types/SimplePokeInfo";
import { getPokemonImages } from "../pokemon";

jest.mock("../api/pokeAPI");

describe("pokemon.ts", () => {
  it("should return the list of pokemon with its images", async () => {
    (pokeAPI.get as jest.Mock).mockImplementation((url) => {
      switch (url) {
        case "/pokemon":
          return Promise.resolve({ data: PokemonList });
        case "/pokemon/1/":
        case "/pokemon/2/":
          return Promise.resolve({ data: PokemonDetails });
      }
    });

    const resp = await getPokemonImages();
    const expectedResult: SimplePokeInfo[] = [
      {
        image: "image",
        name: "bulbasaur",
      },
      {
        image: "image",
        name: "bulbasaur",
      },
    ];

    expect(resp).toEqual(expectedResult);
  });
});
