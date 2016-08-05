import { combineReducers } from 'redux'
import {List} from 'immutable'
import { SET_VISIBILITY_FILTER, VisibilityFilters,
  FETCH_TODOS_SUCCESS, FETCH_TODOS_FAIL, ADD_TODO_SUCCESS, SAVE_TODO_SUCCESS,
  ADD_TODO_FAIL, TOGGLE_TODO_SUCCESS, TOGGLE_TODO_FAIL, SET_EDITING_RECORD,
  DELETE_TODO_SUCCESS, DELETE_TODO_FAIL, DELETE_COMPLETED_FAIL,
  DELETE_COMPLETED_SUCCESS, TOGGLE_TODOS_SUCCESS, TOGGLE_TODOS_FAIL}
  from './actions'
const { SHOW_ALL } = VisibilityFilters

function todos(state = new List(), action) {
  switch (action.type) {
    case ADD_TODO_SUCCESS:
      return state.push(action.todo);
    case TOGGLE_TODO_SUCCESS:
    case SAVE_TODO_SUCCESS:
      return state.map((todo) => {
        if (todo.get('id') === action.todo.get('id')) {
          return action.todo
        }
        return todo
      }) 
    case DELETE_TODO_SUCCESS:
      return state.filter((todo) => todo.get('id') !== action.id)
   case TOGGLE_TODOS_SUCCESS:
      return state.map((todo) => {
        if (todo.get('completed') !== action.value) {
          return todo.set('completed', action.value)
        }
        return todo
      })
    case FETCH_TODOS_SUCCESS:
      return action.todos; 
    case DELETE_COMPLETED_SUCCESS:
      return state.filter((todo) => !todo.get('completed'))
    case FETCH_TODOS_FAIL:
    case ADD_TODO_FAIL:
    case TOGGLE_TODO_FAIL:
    case DELETE_TODO_FAIL:
    case DELETE_COMPLETED_FAIL:
    case TOGGLE_TODOS_FAIL:
      console.log(action.error);
      return state;
    default:
      return state;
  }
}

function editingRecord(id = 0, action) {
  switch (action.type) {
    case SET_EDITING_RECORD:
      return action.id 
    default:
      return id
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


const meta = combineReducers({visibilityFilter, editingRecord})

const todoApp = combineReducers({
  meta, todos
})

export default todoApp
