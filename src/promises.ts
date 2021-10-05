import axios from "axios";
import { PokemonList } from "./types/PokeList";
import { PokemonDetails } from "./types/PokeDetails";

const requestPokeApi = axios.create({ baseURL: "https://pokeapi.co/api/v2" });

const getPokeList = () => {
  requestPokeApi.get<PokemonList>("/pokemon").then((responsePokeList) => {
    responsePokeList.data.results.forEach((item) => {
      const url = item.url.split("v2/")[1];

      requestPokeApi
        .get<PokemonDetails>(url)
        .then(({ data: { name, sprites } }) => {
          console.log(name, sprites.other?.["official-artwork"].front_default);
        });
    });
  });
};

// getPokeList()

async function getPokeImages() {
  const {
    data: { results },
  } = await requestPokeApi.get<PokemonList>("/pokemon");

  results.map(async (item) => {
    const url = item.url.split("v2/")[1];
    const {
      data: { name, sprites },
    } = await requestPokeApi.get<PokemonDetails>(url);

    console.log(name, sprites.other?.["official-artwork"].front_default);
  });
}

// getPokeImages()

const getPokeImagesImproved = async () => {
  const {
    data: { results },
  } = await requestPokeApi.get<PokemonList>("/pokemon");

  const promises = results.map((item) => {
    const url = item.url.split("v2/")[1];
    return requestPokeApi.get<PokemonDetails>(url);
  });

  const pokeDetailsList = await Promise.all(promises);

  pokeDetailsList.forEach(({ data: { name, sprites } }) => {
    console.log(name, sprites.other?.["official-artwork"].front_default);
  });
};

getPokeImagesImproved();