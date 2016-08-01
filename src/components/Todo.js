import React from 'react'

const Todo = ({onClick, todo}) => (
  <li
    onClick={onClick}
    style={{
      textDecoration: todo.get('completed') ? 'line-through' : 'none'
    }}>
    {todo.get('text')}
  </li>
)

export default Todo
