/* eslint-disable no-unused-vars */
import { useDispatch, useSelector } from 'react-redux'
import { getPokemons } from './slices/pokemon/thunks'
import { useEffect } from 'react'

export const PokemonApp = () => {
  const dispatch = useDispatch()
  const { pokemons, page, isLoading } = useSelector(state => state.pokemon)

  useEffect(() => dispatch(getPokemons()), [dispatch])

  return (
    <div>
      Pokemon App
      <hr />
      <span>
        Loading: {isLoading ? 'true' : 'false'}
      </span>
      <ul>
        {
          pokemons.map(pokemon => <li key={pokemon.name}>{pokemon.name}</li>)
        }
      </ul>
      <button
        disabled={isLoading}
        onClick={() => dispatch(getPokemons(page - 1))}
      >
        PREV
      </button>
      <button
        disabled={isLoading}
        onClick={() => dispatch(getPokemons(page + 1))}
      >
        NEXT
      </button>
    </div>
  )
}
