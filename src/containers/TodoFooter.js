import { connect } from 'react-redux'
import Footer from '../components/Footer'
import { deleteCompleted } from '../actions'

const mapStateToProps = (state) => {
  return {
    total: state.todos.size,
    completed: state.todos.filter(todo => todo.get('completed')).size,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    deleteCompleted: () => {dispatch(deleteCompleted())}
  }
}


const TodoFooter = connect(mapStateToProps, mapDispatchToProps)(Footer)

export default TodoFooter
