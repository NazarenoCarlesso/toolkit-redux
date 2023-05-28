/* eslint-disable no-unused-vars */
import { useDispatch, useSelector } from 'react-redux'
import { getPokemons } from './slices/pokemon/thunks'
import { useEffect } from 'react'
import { PokemonList } from './components/PokemonList'

export const PokemonApp = () => {
  const dispatch = useDispatch()
  const { pokemons, page, isLoading } = useSelector(state => state.pokemon)

  useEffect(() => dispatch(getPokemons()), [dispatch])

  return (
    <div>
      <h3 className='pokemon-title'>
        Pokemon App
      </h3>
      <div>
        <img className='gengar' src='/gengar.png' alt='Gengar' />
      </div>
      <div>
        {
          isLoading
            ? <span className='loading'>Loading... </span>
            : <PokemonList pokemons={pokemons} />
        }
      </div>
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
