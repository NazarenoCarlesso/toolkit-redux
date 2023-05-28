/* eslint-disable react/prop-types */
export const TodoList = ({ todos = [] }) => {
  return (
    <ul>
      {
        todos.map(todo => (
          <li
            key={todo.id}
            className={todo.completed ? 'completed' : null}
          >
            {todo.title}
          </li>
        ))
      }
    </ul>
  )
}
