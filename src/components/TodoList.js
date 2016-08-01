import React from 'react'
import Todo from './Todo'

const TodoList = ({ todos, onTodoClick }) => (
  <ul>
    {todos.map(todo =>
      <Todo
        key={todo.get('id')}
        todo={todo}
        onClick={() => onTodoClick(todo.get('id'))}
      />
    )}
  </ul>
)

export default TodoList
