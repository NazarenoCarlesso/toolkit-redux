/* eslint-disable no-unused-vars */
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import counterReducer from '../slices/counter/counterSlice'
import { pokemonSlice } from '../slices/pokemon/pokemonSlice'
import { todoApi } from '../api/todoApi'
// import { todoSlice } from '../slices/todo/todoSlice'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    pokemon: pokemonSlice.reducer,
    // todo: todoSlice.reducer
    [todoApi.reducerPath]: todoApi.reducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware()
    .concat(todoApi.middleware)
})
