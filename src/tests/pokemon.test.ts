import { pokeAPI } from '../api/pokeAPI'
import { SimplePokeInfo } from '../types/SimplePokeInfo'
import { getPokemonEvolutions, getPokemonImages } from '../pokemon'
import PokemonList from '../mock/PokemonList.json'
import PokemonDetails from '../mock/PokemonDetails.json'
import PokemonSpecies from '../mock/PokemonSpecies.json'
import EvolutionChain from '../mock/EvolutionChain.json'

jest.mock('../api/pokeAPI')

describe('pokemon.ts', () => {
  beforeAll(() => {
    ;(pokeAPI.get as jest.Mock).mockImplementation(url => {
      switch (url) {
        case '/pokemon':
          return Promise.resolve({ data: PokemonList })
        case '/pokemon/1/':
          return Promise.resolve({ data: PokemonDetails.bulbasaur })
        case '/pokemon/2/':
          return Promise.resolve({ data: PokemonDetails.ivysaur })
        case '/pokemon-species/1/':
          return Promise.resolve({ data: PokemonSpecies.bulbasaur })
        case '/pokemon-species/2/':
          return Promise.resolve({ data: PokemonSpecies.ivysaur })
        case '/evolution-chain/1/':
          return Promise.resolve({ data: EvolutionChain })
      }
    })
  })
  it('should return the list of pokemon with its images', async () => {
    const resp = await getPokemonImages()
    const expectedResult: SimplePokeInfo[] = [
      {
        image: 'image bulba',
        name: 'bulbasaur',
      },
      {
        image: 'image ivy',
        name: 'bulbasaur',
      },
    ]

    expect(resp).toEqual(expectedResult)
  })

  it('should return the list of pokemon with its evolutions', async () => {
    const resp = await getPokemonEvolutions()
    const expectedResult: PokemonEvolutions[] = [
      { name: 'bulbasaur', evolutions: ['ivysaur', 'venusaur'] },
    ]

    expect(resp).toEqual(expectedResult)
  })
})
