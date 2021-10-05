// # Promises - than/catch vs async await + Promise.all

import { PokemonList } from "./types/PokeList";
import { PokemonDetails } from "./types/PokeDetails";
import pokeAPI from "./api/pokeAPI";

const getPokeList = () => {
  pokeAPI.get<PokemonList>("/pokemon").then((responsePokeList) => {
    responsePokeList.data.results.forEach((item) => {
      const url = item.url.split("v2/")[1];

      pokeAPI.get<PokemonDetails>(url).then(({ data: { name, sprites } }) => {
        console.log(name, sprites.other?.["official-artwork"].front_default);
      });
    });
  });
};

// getPokeList()

async function getPokeImages() {
  const {
    data: { results },
  } = await pokeAPI.get<PokemonList>("/pokemon");

  results.map(async (item) => {
    const url = item.url.split("v2/")[1];
    const {
      data: { name, sprites },
    } = await pokeAPI.get<PokemonDetails>(url);

    console.log(name, sprites.other?.["official-artwork"].front_default);
  });
}

// getPokeImages()

const getPokeImagesImproved = async () => {
  const {
    data: { results },
  } = await pokeAPI.get<PokemonList>("/pokemon");

  const promises = results.map((item) => {
    const url = item.url.split("v2/")[1];
    return pokeAPI.get<PokemonDetails>(url);
  });

  const pokeDetailsList = await Promise.all(promises);

  pokeDetailsList.forEach(({ data: { name, sprites } }) => {
    console.log(name, sprites.other?.["official-artwork"].front_default);
  });
};

getPokeImagesImproved();
