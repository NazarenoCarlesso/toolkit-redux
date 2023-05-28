/* eslint-disable no-unused-vars */
import React from 'react'
import ReactDOM from 'react-dom/client'
import { store } from './store/store'
import { Provider } from 'react-redux'
import App from './App.jsx'
import './styles.css'
import { PokemonApp } from './PokemonApp'
import { TodoApp } from './TodoApp'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
      <PokemonApp />
      <TodoApp />
    </Provider>
  </React.StrictMode>,
)
