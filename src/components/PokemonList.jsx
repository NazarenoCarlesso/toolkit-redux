/* eslint-disable react/prop-types */
export const PokemonList = ({ pokemons }) => {
  return (
    <ul>
      {
        pokemons.map(pokemon => (
          <li key={pokemon.name} className='pokemon'>
            {pokemon.name}
          </li>
        ))
      }
    </ul>
  )
}
