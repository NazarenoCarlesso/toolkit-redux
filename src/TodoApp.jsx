import { useState } from 'react'
import { useGetTodosQuery } from './api/todoApi'
import { TodoList } from './components/TodoList'

export const TodoApp = () => {
  const [page, setPage] = useState(1)
  // TODOS
  const { data: todos = [], isLoading } = useGetTodosQuery()
  // console.log(algo)
  return (
    <div style={{ width: 720 }}>
      <h2 className='pokemon-title'>
        Todos - RTK Query
      </h2>
      <hr />
      {
        isLoading
          ? <span className='loading'>isLoading...</span>
          : <TodoList todos={todos.slice(17 * (page - 1), 17 * page)} />
      }
      <button
        style={{ marginLeft: 20 }}
        onClick={() => setPage(state => state + 1)}
      >
        Next Todos
      </button>
    </div>
  )
}
