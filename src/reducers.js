import { combineReducers } from 'redux'
import {List} from 'immutable'
import { SET_VISIBILITY_FILTER, VisibilityFilters,
  FETCH_TODOS_SUCCESS, FETCH_TODOS_FAIL, ADD_TODO_SUCCESS,
  ADD_TODO_FAIL, TOGGLE_TODO_SUCCESS, TOGGLE_TODO_FAIL} from './actions'
const { SHOW_ALL } = VisibilityFilters

function todos(state = new List(), action) {
  switch (action.type) {
    case ADD_TODO_SUCCESS:
      return state.push(action.todo);
    case TOGGLE_TODO_SUCCESS:
      return state.map((todo) => {
        if (todo.get('id') === action.todo.get('id')) {
          return action.todo
        }
        return todo
      }) 
    case FETCH_TODOS_SUCCESS:
      return action.todos; 
    case FETCH_TODOS_FAIL:
    case ADD_TODO_FAIL:
    case TOGGLE_TODO_FAIL:
      console.log(action.error);
      return state;
    default:
      return state;
  }
}


function visibilityFilter(state = SHOW_ALL, action) {
  switch (action.type) {
  case SET_VISIBILITY_FILTER:
    return action.filter
  default:
    return state
  }
}


const meta = combineReducers({visibilityFilter})

const todoApp = combineReducers({
  meta, todos
})

export default todoApp
