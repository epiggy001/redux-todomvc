import { connect } from 'react-redux'
import { toggleTodo, setEditingRecord, saveTodo, deleteTodo,
  toggleTodos } from '../actions'
import TodoList from '../components/TodoList'

const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case 'SHOW_ALL':
      return todos
    case 'SHOW_COMPLETED':
      return todos.filter(t => t.get('completed'))
    case 'SHOW_ACTIVE':
      return todos.filter(t => !t.get('completed'))
    default:
      return todos
  }
}

const mapStateToProps = (state) => {
  return {
    todos: getVisibleTodos(state.todos, state.meta.visibilityFilter),
    editingRecord: state.meta.editingRecord,
    allCompleted: state.todos.every((todo) => todo.get('completed')) 
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onTodoClick: (todo) => {
      dispatch(toggleTodo(todo))
    },

    onTodoDoubleClick: (todo) => {
      if (!todo.get('completed')) {
        dispatch(setEditingRecord(todo.get('id')))
      }
    },

    saveTodo: (todo, text) => {
      if (todo.get('text') === text) {
        dispatch(setEditingRecord(0))
      }
      dispatch(saveTodo(todo.set('text', text)))
    },

    deleteTodo: (todo) => {
      dispatch(deleteTodo(todo.get('id')))
    },

    toggleTodos: (value) => {
      dispatch(toggleTodos(value))
    } 
  }
}



const VisibleTodoList = connect(mapStateToProps, mapDispatchToProps)(TodoList)

export default VisibleTodoList
