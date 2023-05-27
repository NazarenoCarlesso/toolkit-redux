import { createSlice } from '@reduxjs/toolkit'

export const pokemonSlice = createSlice({
  name: 'pokemon',
  initialState: {
    pokemons: [],
    page: 0,
    isLoading: false
  },
  reducers: {
    startLoadingPokemons: (state) => {
      state.isLoading = true
    },
    setPokemons: (state, action) => {
      const { page, pokemons, isLoading } = action.payload
      state.isLoading = isLoading
      state.page = page
      state.pokemons = pokemons
    },
    add: (state, action) => {
      state.pokemons.push(action.payload)
    }
  }
})

// Action creators are generated for each case reducer function
export const { startLoadingPokemons, setPokemons, add } = pokemonSlice.actions
