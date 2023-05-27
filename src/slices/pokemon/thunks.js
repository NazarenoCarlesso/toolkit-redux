import { setPokemons, startLoadingPokemons } from './pokemonSlice'
import { pokemonApi } from '../../api/pokemonApi'

export const getPokemons = (page = 0) => {
  return (dispatch) => {
    dispatch(startLoadingPokemons())
    // Validar página
    if (page < 0) page = 0
    // TODO: realizar petición http
    /*
    fetch(`https://pokeapi.co/api/v2/pokemon?limit=10&offset=${page * 10}`)
      .then(response => response.json())
      .then(data => dispatch(setPokemons({
        page: page,
        pokemons: data.results,
        isLoading: false
      })))
    */
    // AXIOS
    pokemonApi.get(`/pokemon?limit=18&offset=${page * 18}`)
      .then(response => dispatch(setPokemons({
        page: page,
        pokemons: response.data.results,
        isLoading: false
      })))
    // dispatch(setPokemons())
  }
}
