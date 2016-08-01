import { combineReducers } from 'redux'
import {Map as iMap, List as iList} from 'immutable'
import { ADD_TODO, TOGGLE_TODO, SET_VISIBILITY_FILTER, VisibilityFilters } from './actions'
const { SHOW_ALL } = VisibilityFilters

function* idMacker() {
  let id = 1;
  while (true) {
    yield id++;
  }
}

let idGen = idMacker()

function todos(state = iList(), action) {
  switch (action.type) {
    case ADD_TODO:
      return state.push(iMap({
        id: idGen.next().value,
        text: action.text,
        completed: false
      }));
    case TOGGLE_TODO:
      return state.map((todo, index) => {
        if (todo.get('id') === action.index) {
          return todo.set('completed', !todo.get('completed'))
        }
        return todo
      })
    default:
      return state
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
