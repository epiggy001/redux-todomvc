import React from 'react'
import TodoFooter from '../containers/TodoFooter'
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'

const App = () => (
  <div>
    <AddTodo />
    <VisibleTodoList />
    <TodoFooter />
  </div>
)

export default App
