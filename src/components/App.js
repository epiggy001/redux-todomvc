import React from 'react'
import TodoFooter from '../containers/TodoFooter'
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'
import PageFooter from '../components/PageFooter'

const App = () => (
  <div>
    <section className="todoapp">
        <AddTodo />
        <VisibleTodoList />
        <TodoFooter />
    </section>
    <PageFooter/>
  </div>
)

export default App
