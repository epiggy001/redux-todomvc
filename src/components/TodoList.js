import React from 'react'
import Todo from './Todo'

const TodoList = ({ todos, onTodoClick, onTodoDoubleClick, editingRecord,
  saveTodo, deleteTodo, allCompleted, toggleTodos}) => (
  <section className="main">
    <input className="toggle-all" type="checkbox" checked={allCompleted}
      onChange={()=>{toggleTodos(!allCompleted)}}/>
    <label htmlFor="toggle-all">Mark all as complete</label>
    <ul className="todo-list">
      {todos.map(todo =>
        <Todo
          key={todo.get('id')}
          todo={todo}
          onClick={() => onTodoClick(todo)}
          onDoubleClick={() => onTodoDoubleClick(todo)}
          editing={editingRecord === todo.get('id')}
          save={(text) => saveTodo(todo, text)}
          deleteTodo={()=> deleteTodo(todo)}
        />
      )}
    </ul>
  </section>
)

export default TodoList
