import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../slices/counter/counterSlice'
import { pokemonSlice } from '../slices/pokemon/pokemonSlice'
import { todoSlice } from '../slices/todo/todoSlice'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    pokemon: pokemonSlice.reducer,
    todo: todoSlice.reducer
  },
})
