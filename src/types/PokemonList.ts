// export interface PokemonList {
//     count: number;
//     next: string;
//     previous: null;
//     results: Result[];
// }
// export interface Result {
//     name: string;
//     url: string;
// }
export type PokemonList = {
  count: number
  next: string
  previous: null
  results: Result[]
}

export type Result = {
  name: string
  url: string
}

export type cores = 'Azul' | 'Verde'
